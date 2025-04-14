import { useEffect, useState } from "react";
import axios from "axios";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
      then(res => setGroceries(res.data))
      .catch(err => console.error("Error fetching groceries:", err));
  }, []);

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