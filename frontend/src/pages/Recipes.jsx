import { Link } from "react-router-dom";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import { Button, Col, Container, Row } from "react-bootstrap";


export default function Recipes() {
  return (
    <>
      <Container className="mt-5">
        <Header/>

        <Row className="mb-3">
            <Col md={6}>
                <h2>Recipes</h2>
            </Col>
            <Col md={6}>
                <Link to={"/add"} ><Button variant="primary float-end" >Add New Recipe</Button></Link>
            </Col>
        </Row>

        <RecipeList />
      </Container>
    </>
  );
}
