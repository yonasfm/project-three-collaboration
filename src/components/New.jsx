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

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '23px',
    fontFamily: '"Playfair, display"',
    fontWeight: '400',
    gap: '20px',
  };

  return (
    <div>
      <h2 style={style}>Add New Grocery</h2>
      <form onSubmit={handleSubmit} style={style}>
        <input
          type="text"
          value={groceryItem}
          onChange={(e) => setGroceryItem(e.target.value)}
          placeholder="Enter item name"
          required
          style={style}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default New;
