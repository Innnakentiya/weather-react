import React from "react";
import CurrentTemperature from "./CurrentTemperature.js";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";
import image from "./images/sun.svg";

export default function CurrentWeatherValue() {
  return (
    <div className="row">
      <div className="col-2 text-center">
        <img
          className="weather-icon-main"
          src={image}
          alt="Weather Icon"
          id="icon"
          width="90"
        />
        <div className="temperature-description" id="temperature-description">
          Sunny
        </div>
      </div>
      <div className="col-6">
        <div className="current-day">Today</div>
        <div className="current-day-temperature" id="temperature-input">
          <span className="min-temp">+15℃</span>
          <span className="max-temp"> ...+15℃</span>
        </div>
      </div>
      <div className="col-4">
        <ul>
          <CurrentTemperature />
          <Humidity />
          <Wind />
        </ul>
      </div>
    </div>
  );
}
