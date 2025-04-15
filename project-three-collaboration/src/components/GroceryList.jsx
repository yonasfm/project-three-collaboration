import axios from "axios";
import { useEffect, useState } from "react";
const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [error, setError] = useState(null); // new
  useEffect(() => {
    axios.get("http://localhost:3001/groceries")
      .then(res => {
        if (Array.isArray(res.data)) {
          setGroceries(res.data);
        } else {
          setError("Invalid data format from server.");
        }
      })
      .catch(err => {
        console.error("Error fetching groceries:", err);
        setError("Could not fetch groceries. Please try again.");
      });
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>All Groceries</h1>
      <ul>
        {groceries.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GroceryList;

