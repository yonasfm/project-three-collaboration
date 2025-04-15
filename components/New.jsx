import React from "react";

const New = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create a new grocery item!</title>
      <h1>New item goes here :</h1>
      <form action="/groceries" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="isReadyToBuy">Ready to Buy?</label>
        <input type="checkbox" name="isReadyToBuy" id="isReadyToBuy" />
        <button type="submit">Add Grocery Item?</button>
      </form>
    </>
  );
};

export default New;
