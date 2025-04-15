// src/App.jsx
import { useState } from 'react'; // ✅ don't forget this!
import ContactUs from '../components/ContactUs';
import Edit from '../components/Edit';
import GroceryList from '../components/GroceryList';
import Home from '../components/Home';
import HowWeStarted from '../components/HowWeStarted';
import Navbar from '../components/navbar/navbar';
import New from '../components/New';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app-container">
      <Navbar onNavigate={handleNavigation} />

      {activeSection === 'home' && (
        <section className="home-section">
          <h2>Groceries App</h2>
          <Home />
        </section>
      )}

      {activeSection === 'groceryList' && (
        <section className="grocery-list-section">
          <h2>Our Grocery List</h2>
          <GroceryList />
        </section>
      )}

      {activeSection === 'New' && (
        <section className="new-section">
          <h2>Current for sale</h2>
          <New />
        </section>
      )}

      {activeSection === 'newTrending' && (
        <section className="new-trending-section">
          <h2>New & Trending</h2>
          <NewTrending />
        </section>
      )}

      {activeSection === 'edit' && (
        <section className="easter-section">
          <h2>Edit Groucrees</h2>
          <Edit />
        </section>
      )}

      {activeSection === 'howWeStarted' && (
        <section className="how-we-started-section">
          <h2>How We Started</h2>
          <HowWeStarted />
        </section>
      )}

      {activeSection === 'contactUs' && (
        <section className="contact-us-section">
          <h2>Contact Us</h2>
          <ContactUs />
        </section>
      )}
    </div>
  );
};

export default App;
