import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
import TodayDetailCarousel from "./TodayDetailCarousel";

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
        <WeatherTemp
          iconCode={props.data.icon}
          temp={props.data.temp}
          tempMin={props.data.tempMin}
          tempMax={props.data.tempMax}
        />
        <h3 className="text-capitalize mb-3">{props.data.description}</h3>
        <hr />
      </div>

      <TodayDetailCarousel
        wind={props.data.wind}
        humidity={props.data.humidity}
        tempFeels={props.data.tempFeels + "°"}
        pressure={props.data.pressure}
        sunrise={props.data.sunrise}
        sunset={props.data.sunset}
        timezone={props.data.timezone}
      />
    </div>
  );
}
