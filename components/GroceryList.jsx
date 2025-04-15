import axios from "axios";
import { useEffect, useState } from "react";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/groceries')
      .then(res => {
        // Check if res.data.groceries exists and is an array
        const groceryData = Array.isArray(res.data.groceries)
          ? res.data.groceries
          : [];

        setGroceries(groceryData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching groceries:", err);
        setError("Failed to load groceries.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading groceries...</p>;
  if (error) return <p>{error}</p>;

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
