import { useEffect, useRef, useState } from "react";
import { Form, Button, ListGroup, InputGroup, Card } from "react-bootstrap";

function RecipeForm({ recipe, onSubmit }) {
  // Form states
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [cookingTime, setCookingTime] = useState(recipe?.cookingTime || 0);
  const [ingredients, setIngredients] = useState(recipe?.ingredients || []);
  const [instructions, setInstructions] = useState(recipe?.instructions || []);
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstruction, setNewInstruction] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add ingredient
  const addIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  // Remove ingredient
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Edit ingredient
  const editIngredient = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  // Add instruction
  const addInstruction = () => {
    if (newInstruction.trim() !== "") {
      setInstructions([...instructions, newInstruction]);
      setNewInstruction("");
    }
  };

  // Remove instruction
  const removeInstruction = (index) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  // Edit instruction
  const editInstruction = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCookingTime(Number(cookingTime));
    const recipeData = {
      title,
      description,
      cookingTime,
      ingredients,
      instructions,
    };
    await onSubmit(recipeData);
  };

  return (
    <Card className="mb-5">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Cooking Time (minutes)</Form.Label>
            <Form.Control
              type="number"
              name="cookingTime"
              value={cookingTime}
              onChange={(e) => setCookingTime(Number(e.target.value))}
              required
            />
          </Form.Group>

          {/* Ingredients */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Ingredients</Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Enter new ingredient"
              />
              <Button variant="success" onClick={addIngredient}>
                + Add Ingredient
              </Button>
            </InputGroup>

            <ListGroup>
              {ingredients.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between"
                >
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={item}
                      onChange={(e) => editIngredient(index, e.target.value)}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeIngredient(index)}
                    >
                      &times;
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>

          {/* Instructions */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Instructions</Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                type="text"
                value={newInstruction}
                onChange={(e) => setNewInstruction(e.target.value)}
                placeholder="Enter new instruction"
              />
              <Button variant="success" onClick={addInstruction}>
                + Add Instruction
              </Button>
            </InputGroup>

            <ListGroup>
              {instructions.map((step, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between"
                >
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={step}
                      onChange={(e) => editInstruction(index, e.target.value)}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeInstruction(index)}
                    >
                      &times;
                    </Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <Button variant="primary float-end mb-3" type="submit">
            {recipe ? "Update Recipe" : "Add Recipe"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default RecipeForm;
