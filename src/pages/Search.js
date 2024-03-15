import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  console.log(query);
  const [searchData, setSearchData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/search?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`;

  // Coin Information
  useEffect(() => {
    const fetchSearchDetail = async () => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        setSearchData(data.coins);
        console.log(searchData);
        console.log(url);
      } catch (error) {
        console.error("Error fetching coin detail:", error);
      }
    };

    fetchSearchDetail();
  }, [url]); // Make sure to include 'url' in the dependency array to re-run the effect when 'url' changes

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  return (
    <main className="min-h-screen">
      {/* Search */}
      <section className="max-w-7xl mx-auto py-7">
        <p className="text-2xl text-black dark:text-white">
          {searchData.length === 0
            ? `No movie found for ${query}`
            : `Result for ${query}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-3">
          {searchData.map((coin) => (
            <Link
              to={`/coin/${coin.id}`}
              className="m-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-md h-20 w-20 md:h-auto md:w-30 md:rounded-none md:rounded-s-lg p-2"
                src={coin.large}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {coin.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {coin.symbol} | Rank: {coin.market_cap_rank}
                </p>
                <p>{coin.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;
