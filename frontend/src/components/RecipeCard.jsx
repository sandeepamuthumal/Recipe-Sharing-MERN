import { Button, Card, Col, Row } from "react-bootstrap";

export default function RecipeCard({ recipe }) {
  return (
    <Card className="mb-3 h-100">
      <Card.Body>
        <Card.Title className="fw-bold text-primary">{recipe.title}</Card.Title>
        <Card.Text>
            {recipe.description}
            <Row className="mt-2">
                
                <Col className="mb-2" md={12}>
                    <b>Ingredients: </b>
                    <ul>
                        {recipe.ingredients.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                 
                </Col>
                <Col className="text-end" md={12}>
                    <b>Cooking Time:</b> {recipe.cookingTime} minutes
                </Col>
            </Row>
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
            <Button variant="primary" >Edit</Button>
            <Button variant="danger" className="ms-2">Delete</Button>
        </Card.Footer>
    </Card>
  )
}
