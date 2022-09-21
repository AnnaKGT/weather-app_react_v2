import React, { useState } from "react";
import TodayDetailCard from "./TodayDetailCard";
import FormatSunTime from "./FormatSunTime";
import Carousel from "react-bootstrap/Carousel";
import { WiBarometer, WiSunset, WiSunrise } from "weather-icons-react";

import "./TodayDetailsCarousel.css";

export default function TodayDetailCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let tempFeels = props.tempFeels + "°";

  if (props.unit === "fahrenheit") {
    tempFeels = Math.round((props.tempFeels * 9) / 5 + 32) + "°";
  }

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={true}
        interval={3000}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
      >
        <Carousel.Item>
          <div className="row today-details__carousel-item">
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
                measure={tempFeels}
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row today-details__carousel-item">
            <div className="col weather__today-detail">
              <TodayDetailCard
                param="Pressure"
                icon={<WiBarometer size={28} color="#474555" />}
                measure={props.pressure}
                dimension="hPa"
              />
            </div>
            <div className="col weather__today-detail">
              <TodayDetailCard
                param="Sunrise"
                icon={<WiSunrise size={28} color="#474555" />}
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
                icon={<WiSunset size={28} color="#474555" />}
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
