import { useEffect, useState } from "react";
import {getAllRecipes} from "../api/recipeApi";
import { Button, Col, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes(search);
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to load recipes:", error);
      }
    };

    fetchRecipes();
  }, [search]);

  
  return (
    <div>
        <Row className="mb-3">
            <Col md={6}>
                <h2>Recipes</h2>
            </Col>
            <Col md={6}>
                <Button variant="primary float-end" >Add New Recipe</Button>
            </Col>
        </Row>
        
        <Row>
            <Col md={12} className="mb-3">
                <input type="text" className="form-control" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </Col>
            {recipes.map((recipe) => (
                <Col key={recipe._id} md={4}>
                    <RecipeCard recipe={recipe} />
                </Col>
            ))}
        </Row>
    </div>
  )
}
