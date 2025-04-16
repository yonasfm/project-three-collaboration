import React from "react";
import bagImage from "./images/bag.png";

const Home = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Groceries App</title>

      <div style={{ margin: '84px' }}>
        <h1>Welcome to the Groceries app!</h1>
        <p>Welcome! Enjoy hassle-free shopping, with fresh picks and doorstep delivery.</p>
        <p>From fruits to pantry essentials, everything you need is just a tap away.</p>
        <p>No lines, no heavy bags — just easy, smart grocery shopping!</p>
        <p>Ready to shop? Let’s get started! </p>
      </div>

      <img
        src={bagImage}
        alt="Groceries bag"
        style={{
          marginLeft: '800px',
          marginTop: '-323px'
        }}
      />
    </>
  );
};

export default Home;
