import React, { useState, useEffect } from "react";
import MainPageCaroCard from "./MainPageCaroCard";

const MainPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["/bootstrap.png", "/github_logo.png", "/github_logo.png"];
  const [data, setData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/search/trending?api_key=${process.env.REACT_APP_API_KEY}`;

  async function fetchTrending() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json.coins);
    console.log(data);
  }

  useEffect(() => {
    fetchTrending();

    const fetchInterval = setInterval(fetchTrending, 120000); // Fetch data every 2 minutes

    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Move slider every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-2/3 overflow-hidden relative ">
      <h1 className="text-3xl font-bold my-4">Trending Coins</h1>
      <div className="flex justify-center">
        {data.map((coin, index) => (
          <div
            key={index}
            className={`item-center w-full flex justify-center ${
              index === currentIndex ? "show" : "hidden"
            }`}
            style={{ transition: "transform 1s ease-in-out" }}
          >
            <MainPageCaroCard coinitem={coin.item} />
          </div>
        ))}
      </div>
      {/* Buttons the move */}
      <button
        className="absolute top-1/2 left-0 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={prevSlide}
      >
        <i className="fas fa-chevron-left"></i>{" "}
        {/* Font Awesome icon for previous */}
      </button>
      <button
        className="absolute top-1/2 right-0 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={nextSlide}
      >
        <i className="fas fa-chevron-right"></i>{" "}
        {/* Font Awesome icon for next */}
      </button>
    </div>
  );
};

export default MainPageCarousel;
