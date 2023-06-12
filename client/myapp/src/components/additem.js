import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './item.css';

const Form = ({ fetchItems }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();


  const handleCreateItem = async () => {
    if (!title || !description) {
      setError('Please provide title and description.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/item/additem', { title, description });
      setSuccess('Item added!');
      setTitle('');
      setDescription('');
      fetchItems();
      navigate('/list');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <Link to="/list">
      <button onClick={handleCreateItem}>Add Item</button>
      </Link>
    </div>
  );
};

export default Form;
