import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weahter(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  const [city, setCity] = useState(props.defaultCity);

  function showData(response) {
    setWeatherData({
      load: true,
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
      sunset: new Date(response.data.sys.sunset * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function searchingCity() {
    const apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${props.units}`;
    axios.get(apiCall).then(showData);
  }

  function submitForm(event) {
    event.preventDefault();
    searchingCity();
  }

  function upDateCity(event) {
    setCity(event.target.value);
    console.log(city);
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
        <button className="btn btn-searching w-100" type="button">
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
    </div>
  );

  if (weatherData.load) {
    return (
      <div className="weather">
        {inputForm}
        <WeatherInfo data={weatherData} />
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
