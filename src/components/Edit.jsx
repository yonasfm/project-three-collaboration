
import React, { useState } from 'react';

function Edit({ item, onSubmit }) {
  // Show loading state if item is undefined
  if (!item) {
    return <div>Loading...</div>;
  }

  const [name, setName] = useState(item.name);
  const [isReadyToBuy, setIsReadyToBuy] = useState(item.isReadyToBuy);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...item, name, isReadyToBuy });
  };

  return (
    <div>
      <h1>Edit {item.name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="isReadyToBuy">Ready to Buy:</label>
        <input
          type="checkbox"
          id="isReadyToBuy"
          name="isReadyToBuy"
          checked={isReadyToBuy}
          onChange={(e) => setIsReadyToBuy(e.target.checked)}
        />

        <button type="submit">Update Item</button>
      </form>

      <a href="/groceries">Back to Groceries</a>
    </div>
  );
}

=======
// src/components/Edit.jsx
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
      <h2 style={style}>Edit Grocery</h2>
      <form onSubmit={handleSubmit} style={style}>
        <input
          type="text"
          value={groceryItem}
          onChange={(e) => setGroceryItem(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Update</button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleDelete} style={deleteButtonStyle}>
          Delete Item
        </button>
      </div>
    </div>
  );
};
>>>>>>> 0937169a70965b9ac521e0fe941a0003a47584d2
export default Edit;
  if (!item) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Edit Grocery</h1>

//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={item.name}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <label>Quantity:</label>
//         <input
//           type="number"
//           name="quantity"
//           value={item.quantity}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <label>Ready to Buy?</label>
//         <input
//           type="checkbox"
//           name="isReadyToBuy"
//           checked={item.isReadyToBuy || false}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <button type="submit">Update Grocery</button>
//       </form>

//       <hr />

//       <h2>All Groceries</h2>
//       <ul>
//         {groceries.map((g) => (
//           <li key={g._id}>
//             {g.name} - {g.quantity}
//             <button onClick={() => navigate(`/edit/${g._id}`)}>
//               Edit
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );


// export default Edit;
