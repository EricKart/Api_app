import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/ApiComponents/HomePage";
// Import your API components here
import Weather from "./components/ApiComponents/Weather/Weather";
import Crypto from "./components/ApiComponents/Crypto/Crypto";
import News from "./components/ApiComponents/News/News";
import ImageSearch from "./components/ApiComponents/Pixabay/Pixabay";

// Import other components as they are created

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">OpenWeatherMap API</Link>
          </li>
          <li>
            <Link to="/crypto">Cryptocurrency</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/imagesearch">Image Search</Link>
          </li>

          {/* Add more links for each API as needed */}
        </ul>
      </nav>
      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/news" element={<News />} />
        <Route path="/imagesearch" element={<ImageSearch />} />
        <Route path="/" element={<HomePage />} />
        {/* Updated for clarity */}
        {/* Consider adding a separate callback route if handling Spotify OAuth callback */}
      </Routes>
    </Router>
  );
}

export default App;
