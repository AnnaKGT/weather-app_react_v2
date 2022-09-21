import React from "react";

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

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthes = [
    "Jun",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];

  if (props.type === "currentDate") {
    return (
      <h4>
        {weekDays[day]}, {hours}:{minutes} {monthes[month]} {date}, {year}
      </h4>
    );
  } else if (props.type === "forecast") {
    return (
      <h4>
        {weekDays[day]}, <br />
        {monthes[month]} {date}
      </h4>
    );
  } else {
    return `${hours}:${minutes}`;
  }
}
