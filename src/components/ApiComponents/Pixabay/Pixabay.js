// In ImageSearch.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ImageSearch.module.css"; // Assume you have corresponding CSS for styling

const ImageSearch = () => {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    // Only fetch images if keyword is not empty
    if (keyword) {
      const fetchImages = async () => {
        try {
          const apiKey = "43199299-2c07cb1f80f6e53b359f13e27"; // Replace with your Pixabay API key
          const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
            keyword
          )}&image_type=photo`;

          const response = await axios.get(url);
          setImages(response.data.hits); // 'hits' contains the array of image objects
        } catch (error) {
          console.error("Error fetching images:", error);
          alert("Failed to fetch images. Please check the console for errors.");
        }
      };

      fetchImages();
    }
  }, [keyword]); // Re-fetch when keyword changes

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(e.target.elements.search.value); // Update the keyword to user's input
  };

  return (
    <div className={styles.container}>
      <h2>Image Search</h2>
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" placeholder="Search for images..." />
        <button type="submit">Search</button>
      </form>
      <div className={styles.images}>
        {images.map((image, index) => (
          <a
            key={index}
            href={image.pageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.previewURL} alt={image.tags} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
