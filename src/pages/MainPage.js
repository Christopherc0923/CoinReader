import React, { useState, useEffect } from "react";
import CoinList from "./CoinList/CoinList";
import Trending from "./Trending/Trending";

function MainPage() {
  return (
    <main className="text-white min-h-screen flex flex-col justify-center">
      <div className="flex justify-center p-2">
        <Trending />
      </div>
      <div className="flex justify-center p-2">
        <CoinList />
      </div>
    </main>
  );
}

export default MainPage;
