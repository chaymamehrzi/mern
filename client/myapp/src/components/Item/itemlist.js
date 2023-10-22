import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './itemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8003/item/getitem');
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditItem = async (id) => {
    const updatedTitle = prompt('Enter a new title:', '');
    const updatedDescription = prompt('Enter a new description:', '');

    if (updatedTitle && updatedDescription) {
      try {
        await axios.put(`http://localhost:8003/item/update/${id}`, {
          title: updatedTitle,
          description: updatedDescription,
        });
        fetchItems();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:8003/item/delete/${id}`);
        fetchItems();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="item-list">
        {filteredItems.map((item) => (
          <div key={item._id} className="card">
            <div className="card-header">
              <h3 className="item-title">{item.title}</h3>
            </div>
            <div className="card-body">
              <p className="item-description">{item.description}</p>
              <p className="item-date">{new Date(item.createdAt).toLocaleString()}</p>
            </div>
            <div className="card-footer">
              <Link to={`/edit/${item._id}`} className="link">
                <button className="edit-button">Edit</button>
              </Link>
              <button className="delete-button" onClick={() => handleDeleteItem(item._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
