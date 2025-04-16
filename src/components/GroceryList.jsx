import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const res = await fetch('/api/groceries');
        if (!res.ok) {
          throw new Error('Failed to fetch groceries');
        }
        const data = await res.json();
        setGroceries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchGroceries();
  }, []);
  
  if (loading) return <p>Loading groceries...</p>;
  if (error) return <p>Error: {error}</p>;  

  return (
    <div>
      <h2>Grocery List</h2>
      {groceries.length === 0 ? (
        <p>No groceries found.</p>
      ) : (
        <ul>
          {groceries.map((item) => (
            <li key={item._id}>
              <strong>{item.groceryItem}</strong> – {item.groceryType}
              &nbsp;|&nbsp;
              <Link to={`/groceries/${item._id}/edit`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroceryList;
