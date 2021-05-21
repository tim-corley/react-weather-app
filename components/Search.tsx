import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../redux/actions/alertActions";
import { getWeather, setLoading } from "../redux/actions/weatherActions";

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      return dispatch(setAlert("a city is required"));
    }

    dispatch(setLoading);
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <form onSubmit={submitHandler}>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="bg-white shadow p-4 flex w-full">
            <span className="w-auto flex justify-end items-center text-gray-500 p-2">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </i>
            </span>
            <input
              className="w-full rounded p-2 focus:outline-none focus:ring focus:border-indigo-300"
              type="text"
              placeholder="Try 'Los Angeles'"
              value={city}
              onChange={changeHandler}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-400 rounded text-white focus:outline-none ml-2 p-2 pl-4 pr-4"
            >
              <p className="font-semibold text-xs">Search</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
