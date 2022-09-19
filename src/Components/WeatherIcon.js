import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconMAapping = {
    // clear sky
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    //	few clouds
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    // 	scattered clouds
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    // broken clouds
    "04d": "CLOUDY",
    "04n": "CLOUDY",

    // shower rain
    "09d": "RAIN",
    "09n": "RAIN",
    // rain
    "10d": "RAIN",
    "10n": "RAIN",
    // thunderstorm
    "11d": "RAIN",
    "11n": "RAIN",
    // snow
    "13d": "SNOW",
    "13n": "SNOW",
    // mist
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={iconMAapping[props.icon]}
      color={"#474555"}
      size={64}
      animate={true}
    />
  );
}
