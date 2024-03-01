import React, { useState, useEffect } from "react";
import TrendingCard from "./TrendingCard";

function Trending() {
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

    const refreshInterval = setInterval(fetchTrending, 120000);

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Trending Coins
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {data.map((coin) => (
            // <p>{coin.item.name}</p>
            <TrendingCard coinitem={coin.item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trending;
