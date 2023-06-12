import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './itemedit.css'

function ItemEdit(props) {
  const [item, setItem] = useState({
    title: '',
    description: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/item/updateitem/${id}`)
      .then((res) => {
        setItem({
          title: res.data.title,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: item.title,
      description: item.description,
    };

    axios
      .put(`http://localhost:8000/item/updateitem/${id}`, data)
      .then((res) => {
        navigate(`/list`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit item</h1>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={item.title}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='Description of the Book'
                name='description'
                className='form-control'
                value={item.description}
                onChange={onChange}
              />
            </div>
            <br />


            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemEdit;