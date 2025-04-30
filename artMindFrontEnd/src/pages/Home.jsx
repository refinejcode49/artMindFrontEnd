import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="landing-title">ArtMind</h1>
        <p className="landing-subtitle">
        A work of art a day to nourish your mind.
        </p>
        <div className="landing-buttons">
          <Link to="/signup">
            <button className="landing-btn">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="landing-btn secondary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home