import React from "react";
import "./WeatherForecastDay.css";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  function maxTempearature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTempearature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Sat",
    ];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="row forecast-day-content">
        <div className="col-4 mb-3">
          <img
            className="forecastIcon"
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
            alt={`${props.data.condition}`}
          />
        </div>
        <div className="col-4  mt-5 forecast-content-text">{day()}</div>
        <div className="col-4  mt-5 forecast-content-text">
          {maxTempearature()} / {minTempearature()}
        </div>
      </div>
    </div>
  );
}
