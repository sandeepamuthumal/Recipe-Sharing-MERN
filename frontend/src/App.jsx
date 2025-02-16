
import Recipes from "./pages/Recipes";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
