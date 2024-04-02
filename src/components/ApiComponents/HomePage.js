// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Multi-API Explorer</h1>
      <p>Discover various features powered by popular APIs:</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/weather" style={{ margin: "10px" }}>Weather Forecast</Link>
        <Link to="/crypto" style={{ margin: "10px" }}>Cryptocurrency Rates</Link>
        <Link to="/news" style={{ margin: "10px" }}>Latest News</Link>
        <Link to="/imagesearch" style={{ margin: "10px" }}>Image Search</Link>
        {/* Add more links as you integrate more APIs */}
      </div>
    </div>
  );
};

export default HomePage;
