// src/components/New.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [groceryItem, setGroceryItem] = useState('');
  const [isReadyToBuy, setIsReadyToBuy] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:4000/api/groceries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groceryItem, isReadyToBuy }),
    });

    navigate('/groceries');
  };

  return (
    <div>
      <h2>Add New Grocery</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={groceryItem}
          onChange={(e) => setGroceryItem(e.target.value)}
          placeholder="Enter item name"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default New;
