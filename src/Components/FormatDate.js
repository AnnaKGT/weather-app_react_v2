import React from "react";
import "./FormatDate.css";

export default function FormatDate(props) {
  let year = props.date.getFullYear();
  let date = props.date.getDate();
  let day = props.date.getDay();
  let month = props.date.getMonth();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthes = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (props.type === "currentDate") {
    return (
      <h4 className="formatDate_current">
        {weekDays[day]}, {hours}:{minutes}
        <br />
        {monthes[month]} {date}, {year}
      </h4>
    );
  } else if (props.type === "forecast") {
    return (
      <h4 className="formatDate_forecast">
        {weekDays[day]}, {monthes[month]} {date}
      </h4>
    );
  } else {
    return `${hours}:${minutes}`;
  }
}
