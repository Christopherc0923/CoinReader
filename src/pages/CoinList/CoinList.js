import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function CoinList() {
  const [coinListData, setCoinListData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?api_key=${process.env.REACT_APP_API_KEY}&vs_currency=usd`;

  async function fetchCoinList() {
    const response = await fetch(url);
    const json = await response.json();
    setCoinListData(json);
    console.log(coinListData);
  }

  useEffect(() => {
    fetchCoinList();

    const refreshInterval = setInterval(fetchCoinList, 120000);
    console.log("Refresh");
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl font-bold my-4 text-black dark:text-white">
        All Coins
      </h1>
      <table className="w-full border-gray-50 rounded-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3 text-center">
              Coin
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              <div className="flex items-center p-0 m-0">
                Price
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              <div className="flex items-center p-0 m-0">
                Change
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              <div className="flex items-center p-0 m-0">
                Volume
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {coinListData.map((coin, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th>
                <Link to={`/coin/${coin.id}`}>
                  <img src={coin.image} className="w-8 h-8" />
                </Link>
              </th>
              <td
                scope="row"
                className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
              </td>
              <td className="px-6 py-4 font-bold text-center">
                ${coin.current_price}
              </td>
              <td
                className={`${
                  coin.price_change_percentage_24h.toFixed(2) >= 0
                    ? "text-green-400"
                    : "text-red-400"
                } font-bold px-6 py-4 text-center`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="px-6 py-4 text-center font-bold">
                ${coin.total_volume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;
