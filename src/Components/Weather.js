import React from "react";
import TodayDetailCard from "./TodayDetailCard";

import "./Weather.css";

export default function Weahter() {
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
        <button className="btn btn-searching" type="button">
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="weather">
      {inputForm}

      <div className="row weather__city">
        <div className="col-6">
          <h1>Kyiv</h1>
        </div>
        <div className="col-6 text-end">
          <h3>Wednesday, 16:47</h3>
          <h3>September 14, 2022</h3>
        </div>
      </div>

      <div className="weather__today-weather text-center mb-4">
        <div className="d-flex justify-content-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather"
            width="70px"
          />
          <h2>21</h2>
          <span className="measure">
            <a className="active" href="/">
              °C
            </a>
            <span> | </span>
            <a href="/">°F</a>
          </span>
        </div>
        <h3>Sunny</h3>
        <hr />
      </div>

      <div className="row">
        <div className="col weather__today-detail">
          <TodayDetailCard param="Wind" icon="i" measure="85%" />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard param="Humidity" icon="i" measure="85%" />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard param="Feels like" icon="i" measure="85%" />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard param="Sunrise" icon="i" measure="85%" />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard param="Sunset" icon="i" measure="85%" />
        </div>
      </div>
    </div>
  );
}
