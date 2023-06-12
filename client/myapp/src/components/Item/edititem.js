import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './itemedit.css';

const ItemEdit= ({ id, fetchItems }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleEditItem = async () => {
    if (!updatedTitle || !updatedDescription) {
      setError('Please provide a title and description.');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8000/item/updateitem/${id
    
    }`, {
        title: updatedTitle,
        description: updatedDescription
      });
      fetchItems();
      navigate('/list', { replace: true }); // Navigate to the ItemList component after editing
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-form-container">
      {error && <div className="error-message">{error}</div>}
      <div className="edit-form-group">
        <label htmlFor="updatedTitle">New Title:</label>
        <input id="updatedTitle" type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
      </div>
      <div className="edit-form-group">
        <label htmlFor="updatedDescription">New Description:</label>
        <input id="updatedDescription" type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
      </div>
      <button className="edit-item-button" onClick={handleEditItem}>Edit Item</button>
    </div>
  );
};

export default ItemEdit;
