import axios from "axios";
import React, { useState } from "react";

const New = ({ onNewItem }) => {
  const [name, setName] = useState("");
  const [isReadyToBuy, setIsReadyToBuy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/groceries", {
        name,
        isReadyToBuy,
      });
      if (onNewItem) onNewItem(response.data); // pass new item back
      setName("");
      setIsReadyToBuy(false);
    } catch (err) {
      console.error("Error adding grocery:", err);
    }
  };

  return (
    <div>
      <h2>Create a New Grocery Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Ready to Buy?
          <input
            type="checkbox"
            checked={isReadyToBuy}
            onChange={(e) => setIsReadyToBuy(e.target.checked)}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default New;
