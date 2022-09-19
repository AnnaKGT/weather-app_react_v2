import React from "react";
import FormatDate from "./FormatDate";
import TodayDetailCard from "./TodayDetailCard";
import WeatherIcon from "./WeatherIcon";
import { WiBarometer } from "weather-icons-react";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row weather__city">
        <div className="col-9">
          <h1>
            {props.data.cityName}, {props.data.country}
          </h1>
        </div>
        <div className="col-3 text-end">
          <FormatDate date={props.data.date} type="currentDate" />
        </div>
      </div>
      <div className="weather__today-weather text-center mb-4">
        <div className="d-flex justify-content-center">
          <WeatherIcon icon={props.data.icon} />

          <h2>{props.data.temp}</h2>
          <span className="measure">
            <a className="active" href="/">
              °C
            </a>
            <span> | </span>
            <a href="/">°F</a>
          </span>
        </div>
        <WiBarometer size={24} color="#000" />
        <h3>
          {props.data.tempMax}°
          <span className="text-muted"> {props.data.tempMin}°</span>
        </h3>
        <h3 className="text-capitalize mb-3">{props.data.description}</h3>
        <hr />
      </div>
      <div className="row">
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Wind"
            icon={<i className="fa-solid fa-wind"></i>}
            measure={props.data.wind}
            dimension="m/sec"
          />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Humidity"
            icon={<i className="fa-solid fa-droplet"></i>}
            measure={props.data.humidity}
            dimension="%"
          />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Feels like"
            icon={<i className="fa-solid fa-temperature-half"></i>}
            measure={props.data.tempFeels}
            dimension="°C"
          />
        </div>
      </div>
    </div>
  );
}
