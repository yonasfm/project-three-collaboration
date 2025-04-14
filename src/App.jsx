// src/App.jsx
import { useState } from 'react';
import GroceryList from "./components/GroceryList";
// import Sale from '/components/sale';
// import NewTrending from '/components/newTrending';
// import Easter from '/components/easter';
// import HowWeStarted from '/components/howWeStarted';
// import ContactUs from './components/contactUs';

const App = () => {

  return (
    <h1>Hello, world!</h1>
  );
};

export default App;

function App() {
  return (
    <div>
      <GroceryList />
    </div>
  );
}
// const App = () => {
//   return (
//     <>
//       <Sale />
//       <NewTrending />
//       <Easter />
//       <HowWeStarted />
//       <ContactUs />

//     </>
//   )
// };

// export default App
