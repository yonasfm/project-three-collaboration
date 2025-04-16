// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Edit from './components/Edit';
import GroceryList from './components/GroceryList';
import Home from './components/Home';
import HowWeStarted from './components/HowWeStarted';
import Navbar from './components/navbar/Navbar';
import New from './components/New';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<GroceryList />} />
        <Route path="/groceries/new" element={<New />} />
        <Route path="/groceries/:id/edit" element={<Edit />} />
        <Route path="/how-we-started" element={<HowWeStarted />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
