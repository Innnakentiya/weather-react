import React from "react";
import ColWeatherForecast from "./ColWeatherForecast.js";
import "./ColWeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <ColWeatherForecast />
        <ColWeatherForecast />
        <ColWeatherForecast />
        <ColWeatherForecast />
        <ColWeatherForecast />
      </div>
    </div>
  );
}
