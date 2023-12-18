import React from "react";

export default function WeatherForecastDay(props) {
  function maxTempearature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTempearature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div>
        <div>
          <img
            className="forecastIcon"
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
            //alt={forecastData[0].}
          />
        </div>
        <div>{day()}</div>
      </div>
      <span>
        {maxTempearature()} / {minTempearature()}
      </span>
    </div>
  );
}
