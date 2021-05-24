import React from "react";
import { WeatherData } from "../redux/types";

interface WeatherProps {
  data: WeatherData;
}

export const Weather: React.FC<WeatherProps> = ({ data }) => {
  return (
    <div className="bg-white shadow mt-6 p-4 rounded w-3/4 mx-auto">
      <div className="text-center mt-4">
        <p className="text-gray-600 font-bold">
          {data.name} | {data.sys.country}
        </p>
        <p className="text-sm font-hairline text-gray-600 mt-1">
          {data.weather[0].description}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <img
          className="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </div>
      <div className="mt-6 px-8 flex justify-between text-center">
        <div>
          <p className="text-gray-700 font-bold">{data.main.temp}</p>
          <p className="text-xs mt-2 text-gray-600 font-hairline">
            Temperature
          </p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">{data.main.humidity}</p>
          <p className="text-xs mt-2 text-gray-600 font-hairline">Humidity</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">{data.main.pressure}</p>
          <p className="text-xs mt-2 text-gray-700 font-hairline">Pressure</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">{data.wind.speed}</p>
          <p className="text-xs mt-2 text-gray-700 font-hairline">Wind</p>
        </div>
      </div>
      {/* <div className="mt-6">
        <button className="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
          Follow
        </button>
      </div> */}
    </div>
  );
};
