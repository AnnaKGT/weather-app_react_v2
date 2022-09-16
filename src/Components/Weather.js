import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import FormatDate from "./FormatDate";
import TodayDetailCard from "./TodayDetailCard";

import "./Weather.css";

export default function Weahter(props) {
  const [weatherData, setWeatherData] = useState({ load: false });

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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  let sunriseTime = <FormatDate date={weatherData.sunrise} type="time" />;
  let sunsetTime = <FormatDate date={weatherData.sunset} type="time" />;

  const inputForm = (
    <div className="row weather__input-form text-end">
      <div className="col-10">
        <form>
          <div className="row text-start">
            <div className="col-8 col-md-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col">
              <button className="btn btn-searching w-100" type="button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-2">
        <button className="btn btn-searching w-100" type="button">
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </div>
  );

  if (weatherData.load) {
    return (
      <div className="weather">
        {inputForm}

        <div className="row weather__city">
          <div className="col-9">
            <h1>
              {weatherData.cityName}, {weatherData.country}
            </h1>
          </div>
          <div className="col-3 text-end">
            <FormatDate date={weatherData.date} type="currentDate" />
          </div>
        </div>

        <div className="weather__today-weather text-center mb-4">
          <div className="d-flex justify-content-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              width="70px"
            />
            <h2>{weatherData.temp}</h2>
            <span className="measure">
              <a className="active" href="/">
                °C
              </a>
              <span> | </span>
              <a href="/">°F</a>
            </span>
          </div>
          <h3>
            {weatherData.tempMax}°
            <span className="text-muted"> {weatherData.tempMin}°</span>
          </h3>
          <h4 className="text-capitalize mb-3">{weatherData.description}</h4>
          <hr />
        </div>

        <div className="row">
          <div className="col weather__today-detail">
            <TodayDetailCard param="Wind" icon="i" measure={weatherData.wind} />
          </div>
          <div className="col weather__today-detail">
            <TodayDetailCard
              param="Humidity"
              icon="i"
              measure={weatherData.humidity}
            />
          </div>
          <div className="col weather__today-detail">
            <TodayDetailCard
              param="Feels like"
              icon="i"
              measure={weatherData.tempFeels}
            />
          </div>
          <div className="col weather__today-detail">
            <TodayDetailCard param="Sunrise" icon="i" measure={sunriseTime} />
          </div>
          <div className="col weather__today-detail">
            <TodayDetailCard param="Sunset" icon="i" measure={sunsetTime} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${props.units}`;
    axios.get(apiCall).then(showData);

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
