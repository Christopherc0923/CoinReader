import React, { useState, useEffect } from "react";
import CryptoNewsCard from "./CryptoNewsCard";

function CryptoNews() {
  // https://newsdata.io/api/1/news?apikey=pub_401138053c232801dcd969405d267f61f8447&q=crypto
  const [coinNewsData, setCoinNewsData] = useState([]);
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY_NEWS}&q=crypto`;
  console.log(url);
  async function fetchCoinNews() {
    const response = await fetch(url);
    const json = await response.json();
    setCoinNewsData(json.results);
    console.log(coinNewsData);
  }

  useEffect(() => {
    fetchCoinNews();

    const refreshInterval = setInterval(fetchCoinNews, 60000);
    console.log("Refresh");
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold my-2 text-black dark:text-white">
        News
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {coinNewsData
          // Filter unique titles
          .filter(
            (news, index, self) =>
              index ===
              self.findIndex(
                (t) => t.title === news.title && t.language === "english"
              )
          )
          // Map over filtered array
          .map((news) => (
            <CryptoNewsCard news={news} />
          ))}
      </div>
    </div>
  );
}

export default CryptoNews;
