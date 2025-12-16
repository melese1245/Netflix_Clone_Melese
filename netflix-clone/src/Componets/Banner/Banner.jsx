import React, { useEffect, useState } from "react";
import axios from "../../Utilit/axios"; 
import requests from "../../Utilit/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const movies = response.data.results;

        if (movies.length > 0) {
          // Filter movies that have a valid backdrop image
          const moviesWithBackdrop = movies.filter(
            (m) => m.backdrop_path || m.poster_path
          );

          // Pick a random movie from the filtered list
          const randomMovie =
            moviesWithBackdrop[
              Math.floor(Math.random() * moviesWithBackdrop.length)
            ];

          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    }

    fetchData();
  }, []);

  // Function to truncate long descriptions
  const truncate = (str, n) => (str?.length > n ? str.substr(0, n - 1) + "..." : str);

  if (!movie) return null; // Show nothing until movie is loaded

  const backgroundImageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : "/fallback-image.jpg"; // optional fallback
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;