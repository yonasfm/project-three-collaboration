// import axios from "axios";
// import { useEffect, useState } from "react";

// const GroceryList = () => {
//   const [groceries, setGroceries] = useState([]);

//   useEffect(() => {
//     axios.get('/api/groceries') // Replace with your actual API endpoint
//       .then(res => setGroceries(res.data))
//       .catch(err => console.error("Error fetching groceries:", err));
//   }, []);

//   return (
//     <div>
//       <h1>All Groceries</h1>
//       <ul>
//         {groceries.map(item => (
//           <li key={item.id}>
//             {item.name} - {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GroceryList;
import axios from "axios";
import { useEffect, useState } from "react";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    axios.get('/api/groceries') // Replace with your actual API endpoint
      .then(res => setGroceries(res.data))
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
