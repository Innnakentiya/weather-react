import React from "react";
import CurrentWeatherValue from "./CurrentWeatherValue.js";
import WeatherForecast from "./WeatherForecast.js";
import "./CurrentWeatherValue.css";
import "./WeatherForecast.css";

export default function CurrentWeatherForecast() {
  return (
    <div className="current-weather-forecast">
      <CurrentWeatherValue />
      <hr />
      <WeatherForecast />
    </div>
  );
}
