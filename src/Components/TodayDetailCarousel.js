import React from "react";
import TodayDetailCard from "./TodayDetailCard";
import FormatSunTime from "./FormatSunTime";
import { WiBarometer, WiSunset, WiSunrise } from "weather-icons-react";

export default function TodayDetailCarousel(props) {
  return (
    <div>
      <div className="row">
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Wind"
            icon={<i className="fa-solid fa-wind"></i>}
            measure={props.wind}
            dimension="m/s"
          />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Humidity"
            icon={<i className="fa-solid fa-droplet"></i>}
            measure={props.humidity}
            dimension="%"
          />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Feels like"
            icon={<i className="fa-solid fa-temperature-half"></i>}
            measure={props.tempFeels}
          />
        </div>
      </div>

      <div className="row">
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Pressure"
            icon={<WiBarometer size={36} color="#000" />}
            measure={props.pressure}
            dimension="hPa"
          />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Sunrise"
            icon={<WiSunrise size={36} color="#000" />}
            measure={
              <FormatSunTime
                type="sunrise"
                sunriseTime={props.sunrise}
                sunsetTime={props.sunset}
                timezone={props.timezone}
              />
            }
          />
        </div>
        <div className="col weather__today-detail">
          <TodayDetailCard
            param="Sunset"
            icon={<WiSunset size={36} color="#000" />}
            measure={
              <FormatSunTime
                type="sunset"
                sunriseTime={props.sunrise}
                sunsetTime={props.sunset}
                timezone={props.timezone}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
