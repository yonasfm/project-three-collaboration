import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [groceryItem, setGroceryItem] = useState('');
  const [groceryType, setGroceryType] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/groceries/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroceryItem(data.groceryItem);
        setGroceryType(data.groceryType);
      })
      .catch(err => console.error('Failed to load item:', err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:4000/api/groceries/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groceryItem, groceryType }), // Updated body
    });
    navigate('/groceries');
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:4000/api/groceries/${id}`, {
      method: 'DELETE',
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

  const deleteButtonStyle = {
    marginTop: '20px',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const inputStyle = {
    ...style,
    padding: '10px',
    fontSize: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Grocery Item:
          <input
            type="text"
            value={groceryItem}
            onChange={(e) => setGroceryItem(e.target.value)}
          />
        </label>
        <label>
          Grocery Type:
          <input
            type="text"
            value={groceryType}
            onChange={(e) => setGroceryType(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Edit;