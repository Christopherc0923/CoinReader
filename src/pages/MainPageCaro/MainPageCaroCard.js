import { Link } from "react-router-dom";
import React from "react";

function MainPageCaroCard({ coinitem }) {
  const { id, coin_id, name, symbol, data } = coinitem;
  return (
    <>
      <Link to={`/coin/${id}`}>
        <div class="flex flex-col items-center bg-white border border-blue-100 rounded-lg h-auto md:max-h-60 max-h-60 w-100 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-0 p-0">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={`https://www.coingecko.com/coins/${coin_id}/sparkline.svg`}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name} | {symbol}
            </h5>
            {data.price && !data.price.includes("$0.0<sub") ? (
              <div className="flex-1 items-center min-w-0 ms-4 ">
                <p className="text-base font-semibold text-gray-900 dark:text-white">
                  {data.price}
                </p>
              </div>
            ) : (
              <div className=" flex-1 items-center min-w-0 ms-4 ">
                <p className="text-base font-semibold text-gray-900 dark:text-white">
                  NA
                </p>
              </div>
            )}
            <p
              className={`${
                data.price_change_percentage_24h?.usd >= 0
                  ? "text-green-400"
                  : "text-red-400"
              } font-bold text-sm my-2`}
            >
              {data.price_change_percentage_24h?.usd.toFixed(2)}%
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MainPageCaroCard;
