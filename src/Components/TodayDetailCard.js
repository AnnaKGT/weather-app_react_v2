import React from "react";
import "./TodayDetailCard.css";

export default function TodayDetailCard(props) {
  return (
    <div className="todayDetailCard shadow-sm">
      <div className="card-content">
        <h6>{props.param}</h6>
        <div className="d-flex justify-content-between">
          <div className="todayDetailCard__icon">{props.icon}</div>
          <div>
            {props.measure}
            <span className="todayDetailCard__dimension">
              {props.dimension}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
