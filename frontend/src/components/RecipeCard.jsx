import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, handleDelete }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="fw-bold text-primary">{recipe.title}</Card.Title>
        <p className="recipe-description">{recipe.description}</p>
        <Row className="mt-2">
          <Col className="mb-2" md={4}>
            <b>Ingredients: </b>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Col>
          <Col className="mb-2" md={8}>
            <b>Instructions: </b>
            <ul>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </Col>
          <Col className="text-end" md={12}>
            <b>Cooking Time:</b> {recipe.cookingTime} minutes
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end">
        <Link to={`/edit/${recipe._id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => handleDelete(recipe._id)}
        >
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
}
