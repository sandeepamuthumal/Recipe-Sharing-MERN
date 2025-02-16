import { Container } from "react-bootstrap";
import Recipes from "./pages/Recipes";
import "./styles/global.css";
function App() {
  return (
    <Container className="mt-5">
      <Recipes/>
    </Container>
  );
}

export default App;
