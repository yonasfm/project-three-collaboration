// Edit.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams(); // get the item id from the URL
  const navigate = useNavigate();

  const [item, setItem] = useState(null); // item being edited
  const [groceries, setGroceries] = useState([]); // list of all items

  // Fetch the single item to edit
  useEffect(() => {
    axios.get(`/api/groceries/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.error("Error fetching single item:", err));
  }, [id]);

  // Fetch the entire list of groceries
  useEffect(() => {
    axios.get("/api/groceries")
      .then((res) => setGroceries(res.data))
      .catch((err) => console.error("Error fetching groceries:", err));
  }, []);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setItem({ ...item, isReadyToBuy: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/groceries/${id}`, item)
      .then(() => navigate("/groceries"))
      .catch((err) => console.error("Error updating item:", err));
  }};