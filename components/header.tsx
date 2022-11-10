import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css

type Props = {};

function Header({}: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [noOfGuest, setNoOfGuest] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleRangeChange = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endtDate);
  };

  const cancel = () => {
    setSearchInput("");
    setNoOfGuest('');
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400 "
        />
        <SearchIcon className="hidden md:inline-flex h-7 cursor-pointer bg-red-400 text-white rounded-full p-2 md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500 cursor-pointer">
        <p className="capitalize hidden md:inline-flex">become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex p-2 items-center border-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleRangeChange}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="capitalize text-2xl pl-2 flex-grow font-semibold">
              number of guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              min={1}
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type="number"
              className="pl-2 w-12 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex  ">
            <button
              onClick={cancel}
              className="flex-grow text-gray-500 cursor-pointer font-semibold capitalize"
            >
              cancel
            </button>
            <button className="cursor-pointer font-semibold capitalize flex-grow text-red-500">
              search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
