import React from "react";
import "./TodayDetailCard.css";

export default function TodayDetailCard(props) {
  return (
    <div className="card-wrapper shadow-sm">
      <div className="card-content">
        <h6>{props.param}</h6>
        <div className="d-flex justify-content-between">
          <div>{props.icon}</div>
          <div>{props.measure}</div>
        </div>
      </div>
    </div>
  );
}
