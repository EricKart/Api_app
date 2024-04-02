import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Crypto.module.css'; // Assuming you have a Crypto.module.css

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [currency, setCurrency] = useState(''); // Used for dropdown selection
  const [inputCurrency, setInputCurrency] = useState(''); // Used for text input

  useEffect(() => {
    // Only fetch data if a currency is selected or entered
    const selectedCurrency = currency || inputCurrency;
    if (!selectedCurrency) return; // Exit if no currency is selected or entered

    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${selectedCurrency.toLowerCase()}`);
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
        alert("Failed to fetch cryptocurrency data. Please check the console for errors.");
      }
    };

    fetchCryptoData();
  }, [currency, inputCurrency]); // Depend on both currency and inputCurrency

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page
    setCurrency(inputCurrency); // Update the currency with the one entered
  };

  return (
    <div className={styles.cryptoContainer}>
      <h2>Cryptocurrency Information</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <select
          className={styles.select}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          onBlur={() => setInputCurrency('')} // Clear input when a selection is made
        >
          <option value="">Select a Cryptocurrency</option>
          <option value="bitcoin">Bitcoin (BTC)</option>
          <option value="ethereum">Ethereum (ETH)</option>
          <option value="litecoin">Litecoin (LTC)</option>
          <option value="ripple">Ripple (XRP)</option>
          {/* Add more options as needed */}
        </select>
        or
        <input
          className={styles.input}
          type="text"
          value={inputCurrency}
          onChange={(e) => setInputCurrency(e.target.value)}
          placeholder="Enter a cryptocurrency ID"
        />
        <button type="submit" className={styles.button}>Get Info</button>
      </form>
      {cryptoData ? (
        <div className={styles.cryptoInfo}>
          <h3>{cryptoData.name} ({cryptoData.symbol.toUpperCase()})</h3>
          <p>Current Price: USD {cryptoData.market_data.current_price.usd}</p>
          <p>High 24h Price: USD {cryptoData.market_data.high_24h.usd}</p>
          <p>Low 24h Price: USD {cryptoData.market_data.low_24h.usd}</p>
          <img className={styles.image} src={cryptoData.image.small} alt={`Logo of ${cryptoData.name}`} />
        </div>
      ) : (
        <p>Loading cryptocurrency data...</p>
      )}
    </div>
  );
};

export default Crypto;
