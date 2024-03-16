import React, { useState, useEffect } from "react";
import CoinInfoTab from "./CoinInfoTab/CoinInfoTab";
import CoinList from "./CoinList/CoinList";
import CryptoNews from "./CyptoNews/CryptoNews";
import Landing from "./Landing";
import MainPageCarousel from "./MainPageCaro/MainPageCarousel";
import Trending from "./Trending/Trending";

function MainPage() {
  return (
    <main className="text-white min-h-screen grid justify-center bg-gray-200">
      <div className="flex justify-center m-2">
        <Landing />
      </div>
      <div className="flex justify-center m-2">
        <MainPageCarousel />
      </div>
      <div className="flex justify-center m-2">
        <CoinInfoTab />
      </div>
      {/* <div className="flex justify-center p-2">
        <Trending />
      </div> */}
      <div className="flex justify-center p-2">
        <CoinList />
      </div>
      <div className="flex justify-center m-2">
        <CryptoNews />
      </div>
    </main>
  );
}

export default MainPage;
