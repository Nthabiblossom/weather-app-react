import React, { useState } from "react";
import "./Forecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    //console.log(forecastData);
    return (
      <div className="forecast mt-5">
        <h3>5-Day Forecast</h3>
        <div>
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <span key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "69fo350cf347a61tc6a94bf3497a464e";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
