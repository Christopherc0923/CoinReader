import { Link } from "react-router-dom";
import React from "react";

function TrendingCard({ coinitem }) {
  const { id, coin_id, name, symbol, data } = coinitem;
  return (
    <div className="container">
      <li className="py-3 sm:py-4">
        <Link to={`/coin/${id}`}>
          <div className="flex items-center justify-evenly">
            <div className=" flex-1 min-w-0 ms-4">
              {/* <img className="w-8 h-8 rounded-full" src="" alt="C" /> */}
              <img
                className=""
                src={`https://www.coingecko.com/coins/${coin_id}/sparkline.svg`}
                alt="C"
              />
            </div>

            <div className=" flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {symbol}
              </p>
            </div>

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

            <div className="flex-1 min-w-0 ms-4">
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
      </li>
    </div>
  );
}

export default TrendingCard;
