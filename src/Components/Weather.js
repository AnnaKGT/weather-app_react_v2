import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weahter(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function showData(response) {
    setWeatherData({
      load: true,

      coordLat: response.data.coord.lat,
      coordLon: response.data.coord.lon,
      cityName: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temp: Math.round(response.data.main.temp),
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
      tempFeels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      sunset: response.data.sys.sunset,
      sunrise: response.data.sys.sunrise,
      timezone: response.data.timezone,
      icon: response.data.weather[0].icon,
    });
  }

  function searchingCity() {
    const apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiCall).then(showData);
  }

  function submitForm(event) {
    event.preventDefault();
    searchingCity();
  }

  function upDateCity(event) {
    setCity(event.target.value);
  }

  function setCurrentPosition() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showData);
    });
  }

  function getPosition(event) {
    event.preventDefault();
    setCurrentPosition();
  }

  const inputForm = (
    <div className="row weather__input-form text-end">
      <div className="col-10">
        <form onSubmit={submitForm}>
          <div className="input-group w-100">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
              onChange={upDateCity}
            />

            <span className="input-group-text btn-searching">
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </span>
          </div>
        </form>
      </div>
      <div className="col-2">
        <a
          href="/"
          className="btn btn-searching w-100"
          type="button"
          title="Current location"
          onClick={getPosition}
        >
          <i className="fa-solid fa-house"></i>
        </a>
      </div>
    </div>
  );

  if (weatherData.load) {
    return (
      <div className="weather">
        {inputForm}
        <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        <hr className="weather-sepForecast" />
        <WeatherForecast unit={unit} data={weatherData} />
      </div>
    );
  } else {
    searchingCity();

    return (
      <div>
        {inputForm}
        <div className="m-5 loader-spinners">
          <Oval
            height={80}
            width={80}
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="grey"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      </div>
    );
  }
}
