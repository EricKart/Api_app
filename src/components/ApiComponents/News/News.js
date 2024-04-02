// In News.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./News.module.css"; // Assume you create a similar CSS module for News

const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("technology"); // Default query

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "01468275-203a-42e5-bb12-ef121c2ad400"; // Replace with your NewsAPI key
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        alert(
          "Failed to fetch news articles. Please check the console for errors."
        );
      }
    };

    fetchNews();
  }, [query]); // Re-fetch when query changes

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    const userInput = e.target.elements.query.value;
    setQuery(userInput); // Update the query state to the user input
  };

  return (
    <div className={styles.newsContainer}>
      <h2>Latest News</h2>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" placeholder="Search news..." />
        <button type="submit">Search</button>
      </form>
      {articles.length > 0 ? (
        <ul className={styles.articlesList}>
          {articles.map((article, index) => (
            <li key={index} className={styles.article}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found. Try a different search!</p>
      )}
    </div>
  );
};

export default News;
