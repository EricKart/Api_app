// In Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './weather.module.css';
const Weather = () => {
  const [city, setCity] = useState('Delhi'); // Default city is Delhi
  const [weatherData, setWeatherData] = useState(null);
  const [inputCity, setInputCity] = useState('');

  // Function to fetch weather data
  const fetchWeather = async (chosenCity) => {
    try {
      const apiKey = '858492799474b1f658dd80dd9c6594f0'; // Your API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please check the console for errors.");
    }
  };

  // useEffect hook to fetch weather data for the initial city when the component mounts
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    fetchWeather(inputCity); // Fetch weather for the input city
    setCity(inputCity); // Update the city state with the input city
  };

  return (
    <div className={styles.container}>
      <h2>Weather Information</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter a city"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Get Weather</button>
      </form>
      {weatherData ? (
        <div className={styles.weatherInfo}>
          <h3>{weatherData.name}</h3>
          <div className={styles.weatherDetail}>Temperature: {weatherData.main.temp} °C</div>
          <div className={styles.weatherDetail}>Condition: {weatherData.weather[0].description}</div>
          <div className={styles.weatherDetail}>Humidity: {weatherData.main.humidity}%</div>
          <div className={styles.weatherDetail}>Wind Speed: {weatherData.wind.speed} km/h</div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
