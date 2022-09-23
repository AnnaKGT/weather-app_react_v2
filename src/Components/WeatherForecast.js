import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    setLoad(false);
  }, [props.data]);

  let units = "imperial";
  if (props.unit === "celsius") {
    units = "metric";
  }

  function showForecast(response) {
    setLoad(true);
    setForecast(response.data);
  }

  if (load) {
    return (
      <div>
        {forecast.daily.map(function(dailyForecast, index) {
          if (index > 0 && index < 7) {
            return (
              <div key={index}>
                <WeatherForecastDay
                  data={dailyForecast}
                  timezone={forecast.timezone_offset}
                  units={units}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
    let apiCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.coordLat}&lon=${props.data.coordLon}&units=${units}&appid=${apiKey}`;
    axios.get(apiCall).then(showForecast);

    return null;
  }
}
