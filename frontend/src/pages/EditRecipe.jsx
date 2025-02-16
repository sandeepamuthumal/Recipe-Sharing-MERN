import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeById, updateRecipe } from "../api/recipeApi";
import RecipeForm from "../components/RecipeForm";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import { toast } from "react-toastify";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const loadRecipe = async () => {
      const response = await getRecipeById(id);
      if (response.success) {
        console.log(response.recipe);
        setRecipe(response.recipe);
      } else {
        toast.error("Something went wrong! Please try again later.");
      }
    };
    loadRecipe();
  }, [id]);

  const handleSubmit = async (data) => {
    console.log(data);
    const response = await updateRecipe(id, data);
    console.log("response", response);
    if (response.success) {
      toast.success("Recipe updated successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("Something went wrong! Please try again later.");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Header />
        <Row className="mb-3">
          <Col md={6}>
            <h3>Update Recipe</h3>
          </Col>
          <Col md={6} className="float-end">
            <Breadcrumb className="float-end">
              <Breadcrumb.Item href="/">Recipes</Breadcrumb.Item>
              <Breadcrumb.Item active>Update</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row className="m-auto">
          {recipe ? (
            <RecipeForm recipe={recipe} onSubmit={handleSubmit} />
          ) : (
            <p>Loading...</p>
          )}
        </Row>
      </Container>
    </>
  );
}
