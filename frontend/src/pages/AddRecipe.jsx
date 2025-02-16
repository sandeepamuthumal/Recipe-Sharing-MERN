import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import { toast } from "react-toastify";

import RecipeForm from "../components/RecipeForm";
import { createRecipe } from "../api/recipeApi";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    console.log(data);
    const response = await createRecipe(data);
    console.log("response", response);
    if (response.success) {
      toast.success("Recipe added successfully!");
      setTimeout(() => {
        navigate("/"); // Use navigate function
      }, 2000);
    }
    else{
        toast.error("Something went wrong! Please try again later.");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Header />
        <Row className="mb-3">
          <Col md={6}>
            <h3>Add New Recipe</h3>
          </Col>
          <Col md={6} className="float-end">
            <Breadcrumb className="float-end">
              <Breadcrumb.Item href="/">Recipes</Breadcrumb.Item>
              <Breadcrumb.Item active>Create</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row className="m-auto">
          <RecipeForm onSubmit={handleSubmit} />
        </Row>
      </Container>
    </>
  );
}
