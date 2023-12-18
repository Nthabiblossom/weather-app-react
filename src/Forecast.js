import React, { useState, useEffect } from "react";
import "./Forecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "69fo350cf347a61tc6a94bf3497a464e";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    Axios.get(apiUrl).then(handleResponse);
    return null;
  }

  if (loaded) {
    return (
      <div className="forecast mt-5">
        <h3 className="mt-3">5-Day Forecast</h3>
        <div>
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
