import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import FormatSunTime from "./FormatSunTime";
import { WiSunset, WiSunrise } from "weather-icons-react";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let tempMax = Math.round(props.data.temp.max);
  let tempMin = Math.round(props.data.temp.min);
  let humidity = props.data.humidity;
  let wind = props.data.wind_speed;
  let icon = props.data.weather[0].icon;
  let timezone = props.timezone;
  let sunSet = props.data.sunset;
  let sunRise = props.data.sunrise;

  if (props.units === "imperial") {
    tempMax = Math.round((tempMax * 9) / 5 + 32);
    tempMin = Math.round((tempMin * 9) / 5 + 32);
  }

  return (
    <div className="WeatherForecast shadow-sm d-flex justify-content-between">
      <div className=" WeatherForecast-day">
        <FormatDate date={date} type={"forecast"} />
      </div>
      <div className=" WeatherForecast-temp d-flex align-items-center">
        <WeatherIcon
          icon={icon}
          size={36}
          className="WeatherForecast-temp-icon"
        />{" "}
        <span className="ms-3">{Math.round(tempMax)}°</span>{" "}
        <span className="text-muted ms-2"> {Math.round(tempMin)}°</span>
      </div>
      <div className="WeatherForecast-details-block">
        <div className="row">
          <div className="col WeatherForecast-details">
            <div>
              <i className="fa-solid fa-droplet"></i> {humidity}%
            </div>
            <div>
              <i className="fa-solid fa-wind"></i> {Math.round(wind)}m/s
            </div>
          </div>
          <div className="col WeatherForecast-details">
            <WiSunrise size={20} color="#474555" />{" "}
            <FormatSunTime
              type="sunrise"
              sunriseTime={sunRise}
              sunsetTime={sunSet}
              timezone={timezone}
            />
            <WiSunset size={20} color="#474555" />{" "}
            <FormatSunTime
              type="sunset"
              sunriseTime={sunRise}
              sunsetTime={sunSet}
              timezone={timezone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
