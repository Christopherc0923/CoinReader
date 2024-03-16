import React from "react";

function RecentlyAdded() {
  // https://pro-api.coingecko.com/api/v3/coins/top_gainers_losers
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
  return <div>RecentlyAdded</div>;
}

export default RecentlyAdded;
