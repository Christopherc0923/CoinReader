import React, { useState } from "react";

function CoinInfoTab() {
  const [selectedTab, setSelectedTab] = useState("Profile");

  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
    console.log(selectedTab);
  };

  return (
    <div className="w-2/3">
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your tab
        </label>
        <select
          id="tabs"
          value={selectedTab}
          onChange={handleTabChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Profile">Profile</option>
          <option value="Dashboard">Dashboard</option>
          <option value="Settings">Settings</option>
          <option value="Invoice">Invoice</option>
        </select>
      </div>
      <ul className="text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 my-2">
        <li className={`w-full focus-within:z-10 block`}>
          <button
            className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white  ${
              selectedTab === "Profile"
                ? "bg-gray-50 dark:bg-gray-700"
                : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("Profile")}
          >
            Profile
          </button>
        </li>
        <li className={`w-full focus-within:z-10 block`}>
          <button
            className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white  ${
              selectedTab === "Dashboard"
                ? "bg-gray-50 dark:bg-gray-700"
                : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("Dashboard")}
          >
            Dashboard
          </button>
        </li>
        <li className={`w-full focus-within:z-10 block`}>
          <button
            className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white  ${
              selectedTab === "Settings"
                ? "bg-gray-50 dark:bg-gray-700"
                : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("Settings")}
          >
            Settings
          </button>
        </li>
        <li className={`w-full focus-within:z-10 block`}>
          <button
            className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white  ${
              selectedTab === "Invoice"
                ? "bg-gray-50 dark:bg-gray-700"
                : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("Invoice")}
          >
            Invoice
          </button>
        </li>
      </ul>

      <div id="content">
        <div className={`${selectedTab === "Profile" ? "block" : "hidden"}`}>
          Profile ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          velit nec orci feugiat ultricies. Vivamus vel gravida metus. Ut
          ultricies, lacus ac convallis tempus, odio libero pellentesque est, eu
          rhoncus lacus tortor sed ex. Mauris condimentum nunc eu justo porta,
          id rutrum ante fringilla. Aliquam pulvinar justo quis ipsum convallis,
          in malesuada mi euismod. Fusce non mauris sagittis, tempor justo nec,
          viverra sem. In dapibus arcu sit amet risus tincidunt vehicula. Sed
          malesuada nunc nec libero feugiat, ac accumsan tortor bibendum. Nullam
          vestibulum elit sit amet purus eleifend, vel tempus nulla eleifend.
          Donec id dictum nunc, eget ultricies metus. Suspendisse potenti.
          Suspendisse potenti. Donec ac est nisi. Curabitur pharetra ipsum et
          lectus sodales, at pulvinar risus fringilla. Donec tincidunt nulla nec
          ipsum fringilla ultricies. Sed ac arcu finibus, lobortis lectus vitae,
          pretium eros. Vivamus luctus luctus est id tristique. Sed in ante id
          ipsum tincidunt iaculis.
        </div>
        <div className={`${selectedTab === "Dashboard" ? "block" : "hidden"}`}>
          Dashboard ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          velit nec orci feugiat ultricies. Vivamus vel gravida metus. Ut
          ultricies, lacus ac convallis tempus, odio libero pellentesque est, eu
          rhoncus lacus tortor sed ex. Mauris condimentum nunc eu justo porta,
          id rutrum ante fringilla. Aliquam pulvinar justo quis ipsum convallis,
          in malesuada mi euismod. Fusce non mauris sagittis, tempor justo nec,
          viverra sem. In dapibus arcu sit amet risus tincidunt vehicula. Sed
          malesuada nunc nec libero feugiat, ac accumsan tortor bibendum. Nullam
          vestibulum elit sit amet purus eleifend, vel tempus nulla eleifend.
          Donec id dictum nunc, eget ultricies metus. Suspendisse potenti.
          Suspendisse potenti. Donec ac est nisi. Curabitur pharetra ipsum et
          lectus sodales, at pulvinar risus fringilla. Donec tincidunt nulla nec
          ipsum fringilla ultricies. Sed ac arcu finibus, lobortis lectus vitae,
          pretium eros. Vivamus luctus luctus est id tristique. Sed in ante id
          ipsum tincidunt iaculis.
        </div>
        <div className={`${selectedTab === "Settings" ? "block" : "hidden"}`}>
          Settings ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          velit nec orci feugiat ultricies. Vivamus vel gravida metus. Ut
          ultricies, lacus ac convallis tempus, odio libero pellentesque est, eu
          rhoncus lacus tortor sed ex. Mauris condimentum nunc eu justo porta,
          id rutrum ante fringilla. Aliquam pulvinar justo quis ipsum convallis,
          in malesuada mi euismod. Fusce non mauris sagittis, tempor justo nec,
          viverra sem. In dapibus arcu sit amet risus tincidunt vehicula. Sed
          malesuada nunc nec libero feugiat, ac accumsan tortor bibendum. Nullam
          vestibulum elit sit amet purus eleifend, vel tempus nulla eleifend.
          Donec id dictum nunc, eget ultricies metus. Suspendisse potenti.
          Suspendisse potenti. Donec ac est nisi. Curabitur pharetra ipsum et
          lectus sodales, at pulvinar risus fringilla. Donec tincidunt nulla nec
          ipsum fringilla ultricies. Sed ac arcu finibus, lobortis lectus vitae,
          pretium eros. Vivamus luctus luctus est id tristique. Sed in ante id
          ipsum tincidunt iaculis.
        </div>
        <div className={`${selectedTab === "Invoice" ? "block" : "hidden"}`}>
          Invoice ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          velit nec orci feugiat ultricies. Vivamus vel gravida metus. Ut
          ultricies, lacus ac convallis tempus, odio libero pellentesque est, eu
          rhoncus lacus tortor sed ex. Mauris condimentum nunc eu justo porta,
          id rutrum ante fringilla. Aliquam pulvinar justo quis ipsum convallis,
          in malesuada mi euismod. Fusce non mauris sagittis, tempor justo nec,
          viverra sem. In dapibus arcu sit amet risus tincidunt vehicula. Sed
          malesuada nunc nec libero feugiat, ac accumsan tortor bibendum. Nullam
          vestibulum elit sit amet purus eleifend, vel tempus nulla eleifend.
          Donec id dictum nunc, eget ultricies metus. Suspendisse potenti.
          Suspendisse potenti. Donec ac est nisi. Curabitur pharetra ipsum et
          lectus sodales, at pulvinar risus fringilla. Donec tincidunt nulla nec
          ipsum fringilla ultricies. Sed ac arcu finibus, lobortis lectus vitae,
          pretium eros. Vivamus luctus luctus est id tristique. Sed in ante id
          ipsum tincidunt iaculis.
        </div>
      </div>
    </div>
  );
}
export default CoinInfoTab;
