import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [groceryItem, setGroceryItem] = useState('');
  const [isReadyToBuy, setIsReadyToBuy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/groceries/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroceryItem(data.groceryItem);
        setIsReadyToBuy(data.isReadyToBuy);
      })
      .catch(err => console.error('Failed to load item:', err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:4000/api/groceries/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groceryItem, isReadyToBuy }),
    });
    navigate('/groceries');
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:4000/api/groceries/${id}`, {
      method: 'DELETE',
    });
    navigate('/groceries');
  };

  return (
    <div>
      <h2>Edit Grocery</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={groceryItem}
          onChange={(e) => setGroceryItem(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      <button
        onClick={handleDelete}
        style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Delete Item
      </button>
    </div>
  );
};

export default Edit;
