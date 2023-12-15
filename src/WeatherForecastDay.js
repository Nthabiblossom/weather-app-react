import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div>
        <span>
          <img
            className="forecastIcon"
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
            //alt={forecastData[0].}
          />
        </span>
        <span>{props.data.time}</span>
      </div>
      <div className="col-3">
        {Math.round(props.data.temperature.maximum)}° /{" "}
        {Math.round(props.data.temperature.minimum)}°
      </div>
    </div>
  );
}
