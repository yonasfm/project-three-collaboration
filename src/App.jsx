// src/App.jsx
import { useState } from 'react'; // ✅ don't forget this!
import ContactUs from '../components/ContactUs';
import Easter from '../components/Easter';
import GroceryList from '../components/GroceryList';
import HowWeStarted from '../components/HowWeStarted';
import Navbar from '../components/navbar/navbar'; // ✅ if you have this
import NewTrending from '../components/NewTrending';
import Sale from '../components/Sale';

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
          <h3>Welcome to FreshMart Groceries</h3>
          <p>
            Your friendly neighborhood grocery store with the freshest produce, trending deals,
            seasonal highlights, and everything your kitchen needs. Explore what’s new!
          </p>
        </section>
      )}

      {activeSection === 'groceryList' && (
        <section className="grocery-list-section">
          <h2>Our Grocery List</h2>
          <GroceryList />
        </section>
      )}

      {activeSection === 'sale' && (
        <section className="sale-section">
          <h2>Current Sale</h2>
          <Sale />
        </section>
      )}

      {activeSection === 'newTrending' && (
        <section className="new-trending-section">
          <h2>New & Trending</h2>
          <NewTrending />
        </section>
      )}

      {activeSection === 'easter' && (
        <section className="easter-section">
          <h2>Special Easter Picks</h2>
          <Easter />
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
