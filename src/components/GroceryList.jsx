import axios from "axios";
import { useEffect, useState } from "react";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGroceries = () => {
    axios.get("/api/groceries")
      .then(res => {
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
  };

  useEffect(() => {
    fetchGroceries();
  }, []);

  if (loading) return <p>Loading groceries...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceries.map(item => (
          <li key={item._id}>
            {item.name} — {item.isReadyToBuy ? "✅ Ready" : "❌ Not Ready"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
