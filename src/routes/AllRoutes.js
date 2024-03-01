import React from "react";
import { Routes, Route } from "react-router-dom";
import CoinDetail from "../components/CoinDetail";
import MainPage from "../pages/MainPage";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
        <Route path="/search/" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
