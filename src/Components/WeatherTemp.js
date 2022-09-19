import React, { useState } from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertFahrenheit(temp) {
    return Math.round((temp * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemp">
        <div className="d-flex justify-content-center">
          <WeatherIcon icon={props.iconCode} />

          <h2>{props.temp}</h2>
          <span className="measure">
            <span>°C </span>
            <a href="/" onClick={showFahrenheit}>
              | °F
            </a>
          </span>
        </div>
        <h3>
          {props.tempMax}°<span className="text-muted"> {props.tempMin}°</span>
        </h3>
      </div>
    );
  } else {
    return (
      <div className="weatherTemp">
        <div className="d-flex justify-content-center">
          <WeatherIcon icon={props.iconCode} />

          <h2>{convertFahrenheit(props.temp)}</h2>
          <span className="measure">
            <a href="/" onClick={showCelsius}>
              °C |
            </a>
            <span> °F</span>
          </span>
        </div>
        <h3>
          {convertFahrenheit(props.tempMax)}°
          <span className="text-muted">
            {" "}
            {convertFahrenheit(props.tempMin)}°
          </span>
        </h3>
      </div>
    );
  }
}
