import React, { useState } from "react";
import TodayDetailCard from "./TodayDetailCard";
import FormatSunTime from "./FormatSunTime";
import Carousel from "react-bootstrap/Carousel";
import { WiBarometer, WiSunset, WiSunrise } from "weather-icons-react";

export default function TodayDetailCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        className="today-detail"
      >
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col weather__today-detail">
              <TodayDetailCard
                param="Pressure"
                icon={<WiBarometer size={28} color="#000" />}
                measure={props.pressure}
                dimension="hPa"
              />
            </div>
            <div className="col weather__today-detail">
              <TodayDetailCard
                param="Sunrise"
                icon={<WiSunrise size={28} color="#000" />}
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
                icon={<WiSunset size={28} color="#000" />}
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
