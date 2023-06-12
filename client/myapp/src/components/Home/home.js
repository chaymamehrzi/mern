import React from 'react';
import './home.css';
import { useNavigate,Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Orange Summer Challenger</h1>
        <p></p>
        <Link to="/login">
        <button className="cta-button">Please Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;