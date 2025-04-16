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

export default Edit;
