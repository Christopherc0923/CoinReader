import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from "chart.js/auto";
import axios from "axios";
import "chartjs-plugin-zoom";

export default function CoinDetail() {
  const [coinData, setCoinData] = useState([]);
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  // Coin Information
  const fetchCoinDetail = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      setCoinData(data);
      console.log(coinData);
    } catch (error) {
      console.error("Error fetching coin detail:", error);
    }
  };

  useEffect(() => {
    fetchCoinDetail();

    const refreshInterval = setInterval(fetchCoinDetail, 60000);

    return () => clearInterval(refreshInterval);
  }, []);

  const [chart, setChart] = useState(null);

  // Price Chart
  const fetchData = async (day) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?api_key=${process.env.REACT_APP_API_KEY}&vs_currency=usd&days=${day}`
      );
      const { data } = response;
      console.log(response);
      const dates = data.prices.map((price) =>
        new Date(price[0]).toLocaleString("en-US", { hour12: false })
      );
      const prices = data.prices.map((price) => price[1]);
      console.log(dates);
      console.log(prices);

      if (chart) {
        chart.destroy();
      }

      const ctx = document.getElementById("myChart");
      const newChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Price",
              data: prices,
              borderColor: "#3e95cd",
              fill: false,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Market Performance",
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          elements: {
            point: {
              radius: 3,
            },
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Date",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Value",
                },
              },
            ],
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: "x",
              },
              zoom: {
                enabled: true,
                mode: "x",
              },
            },
          },
        },
      });
      setChart(newChart);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const handleButtonClick = (days) => {
    const day = days;
    fetchData(day);
  };

  useEffect(() => {
    fetchData(1);

    const refreshChartInterval = setInterval(fetchData, 60000);

    return () => clearInterval(refreshChartInterval);
  }, []);

  return (
    <main className="text-white min-h-screen grid grid-col-1 justify-center">
      {/* Header */}
      <div>
        <div className="flex flex-row items-center m-0 p-0">
          <img src={coinData.image?.small} className="w-12 h-12 m-2" />
          <p className="text-black dark:text-white font-bold text-5xl mr-2">
            {coinData.localization?.en}
          </p>
          <p className="text-grey font-bold text-md">{coinData.symbol}</p>
        </div>

        <div className="flex flex-row items-center justify-start m-0 p-0">
          <p className="text-black dark:text-white font-semibold mr-2 text-3xl">
            ${coinData.market_data?.current_price?.usd?.toLocaleString()}
          </p>
          <p
            className={`${
              coinData.market_data?.price_change_percentage_1h_in_currency
                ?.usd >= 0
                ? "text-green-400"
                : "text-red-400"
            } font-semibold`}
          >
            {coinData.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(
              2
            )}
            %
          </p>
        </div>

        <div className="flex flex-row items-center justify-start m-0 p-0">
          <p className="text-black text-lg dark:text-white font-bold mr-2">
            Market Cap: $
            {coinData.market_data?.market_cap?.usd?.toLocaleString()}
          </p>
          {coinData.market_cap_rank ? (
            <p className=" font-bold">#{coinData.market_cap_rank}</p>
          ) : (
            <p> </p>
          )}
        </div>
      </div>

      {/* Price Graph */}
      <div className="container">
        <canvas className="w-screen" id="myChart"></canvas>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleButtonClick(1)}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Day
        </button>
        <button
          onClick={() => handleButtonClick(7)}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Week
        </button>
        <button
          onClick={() => handleButtonClick(30)}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Month
        </button>
        <button
          onClick={() => handleButtonClick(365)}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Year
        </button>
      </div>

      {/* Information Table*/}
      <div className="relative overflow-x-auto sm:rounded-lg flex justify-center h-fit m-2">
        <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                1H
              </th>
              <th scope="col" className="px-6 py-3">
                1D
              </th>

              <th scope="col" className="px-6 py-3">
                7D
              </th>

              <th scope="col" className="px-6 py-3">
                30D
              </th>

              <th scope="col" className="px-6 py-3">
                1Y
              </th>
            </tr>
          </thead>
          <tbody className="text-center row-height-50">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              {coinData.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
                2
              ) ? (
                <td
                  className={`${
                    coinData.market_data?.price_change_percentage_1h_in_currency
                      ?.usd >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-bold`}
                >
                  {coinData.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
                    2
                  )}
                  %
                </td>
              ) : (
                <td>NA</td>
              )}

              {coinData.market_data?.price_change_percentage_24h_in_currency?.usd?.toFixed(
                2
              ) ? (
                <td
                  className={`${
                    coinData.market_data
                      ?.price_change_percentage_24h_in_currency?.usd >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-bold`}
                >
                  {coinData.market_data?.price_change_percentage_24h_in_currency?.usd?.toFixed(
                    2
                  )}
                  %
                </td>
              ) : (
                <td>NA</td>
              )}

              {coinData.market_data?.price_change_percentage_7d_in_currency?.usd?.toFixed(
                2
              ) ? (
                <td
                  className={`${
                    coinData.market_data?.price_change_percentage_7d_in_currency
                      ?.usd >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-bold`}
                >
                  {coinData.market_data?.price_change_percentage_7d_in_currency?.usd?.toFixed(
                    2
                  )}
                  %
                </td>
              ) : (
                <td>NA</td>
              )}

              {coinData.market_data?.price_change_percentage_30d_in_currency?.usd?.toFixed(
                2
              ) ? (
                <td
                  className={`${
                    coinData.market_data
                      ?.price_change_percentage_30d_in_currency?.usd >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-bold`}
                >
                  {coinData.market_data?.price_change_percentage_30d_in_currency?.usd?.toFixed(
                    2
                  )}
                  %
                </td>
              ) : (
                <td>NA</td>
              )}

              {coinData.market_data?.price_change_percentage_1y_in_currency?.usd?.toFixed(
                2
              ) ? (
                <td
                  className={`${
                    coinData.market_data?.price_change_percentage_1y_in_currency
                      ?.usd >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  } font-bold`}
                >
                  {coinData.market_data?.price_change_percentage_1y_in_currency?.usd?.toFixed(
                    2
                  )}
                  %
                </td>
              ) : (
                <td>NA</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Other Coin Info */}
      <div className="container mx-auto mt-8 flex justify-center">
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="font-bold text-lg px-2">Hashing</td>
              <td className="text-center">{coinData.hashing_algorithm}</td>
            </tr>
            <tr>
              <td className="font-bold text-lg px-2">Market Cap</td>
              <td className="text-center">
                {coinData.market_data?.market_cap?.usd?.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="font-bold text-lg px-2">Volume</td>
              <td className="text-center">
                {coinData.market_data?.total_volume?.usd?.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="font-bold text-lg px-2">Circulation Supply</td>
              <td className="text-center">
                {coinData.market_data?.circulating_supply?.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="font-bold text-lg px-2">Total Supply</td>
              <td className="text-center">
                {coinData.market_data?.total_supply?.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="font-bold text-lg px-2">Max Supply</td>
              <td className="text-center">
                {coinData.market_data?.max_supply?.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Desc */}
      <div className="container">
        <h2 className="font-bold text-2xl py-2">Overview</h2>
        <p
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: "&nbsp" + "&nbsp" + coinData.description?.en,
          }}
        />
      </div>
    </main>
  );
}
