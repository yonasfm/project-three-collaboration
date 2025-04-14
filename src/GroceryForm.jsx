import { useState } from "react";
import axios from "axios"; // lets us make HTTP requests

const GroceryForm = ({ onAdd }) => {
  // state for form inputs
  const [name, setName] = useState(""); // holds name of grocery
  const [quantity, setQuantity] = useState(""); // holds quantity input
  const [isInStock, setIsInStock] = useState(false); // tracks checkbox value

  // handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page refresh
    const newGrocery = { name, quantity, isInStock }; // builds new item

    try {
      const res = await axios.post("http://localhost:5173/groceries", newGrocery); // sends POST to Express backend
      onAdd(res.data); // sends new item back to parent (optional)
      setName(""); // clears form fields
      setQuantity("");
      setIsInStock(false);
    } catch (err) {
      console.error("Error creating grocery item:", err); // shows error in console
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Grocery Item</h2>

      {/* name input */}
      <label>
        Name:
        <input
          type="text"
          placeholder="e.g. Apples"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
          {/* quantity input */}
          <label>
        Quantity:
        <input
          type="text"
          placeholder="e.g. 5 lbs"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
         </label>

{/* checkbox for stock status */}
<label>
  In Stock:
  <input
    type="checkbox"
    checked={isInStock}
    onChange={(e) => setIsInStock(e.target.checked)}
  />
</label>

<button type="submit">Add Grocery</button>
</form>
);
};

export default GroceryForm;