// src/App.jsx
import ContactUs from '../components/contactUs';
import Easter from '../components/easter';
import GroceryList from '../components/GroceryList';
import HowWeStarted from '../components/howWeStarted';
import NewTrending from '../components/newTrending';
import Sale from '../components/sale';

const App = () => {

  return (
    <>
      <GroceryList />
      <Sale />
      <NewTrending />
      <Easter />
      <HowWeStarted />
      <ContactUs />

    </>
  );
};

export default App;
