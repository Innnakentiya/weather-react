import React from "react";
import Search from "./Search.js";
import Location from "./Location.js";
import "./Location.css";

import CurrentWeatherForecast from "./CurrentWeatherForecast";
import "./CurrentWeatherForecast.css";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <Search />
      <Location />
      <CurrentWeatherForecast />
    </div>
  );
}
