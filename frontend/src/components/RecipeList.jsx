import { useEffect, useState } from "react";
import {deleteRecipe, getAllRecipes} from "../api/recipeApi";
import { Col, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';


export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchRecipes = async () => {
    try {
      const data = await getAllRecipes(search);
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Failed to load recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [search]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    });
  };

  const onDelete = async (id) => {
    try {
      const response = await deleteRecipe(id);
      if (response.success) {
        toast.success("Recipe deleted successfully!");
        // Show a success message
        Swal.fire(
          'Deleted!',
          'Recipe has been deleted.',
          'success'
        );
        fetchRecipes();
      }
      else{
          toast.error("Something went wrong! Please try again later.");
      }
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  
  return (
    <div>
        
        <Row>
            <Col md={12} className="mb-3">
                <input type="text" className="form-control" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </Col>
            {recipes.map((recipe) => (
                <Col className="mb-3" key={recipe._id} md={12}>
                    <RecipeCard recipe={recipe} handleDelete={handleDelete} />
                </Col>
            ))}
        </Row>
    </div>
  )
}
