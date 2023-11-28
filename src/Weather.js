import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      conditions: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      //icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`;
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather mt-5 ">
        <div className="contents position-relative">
          <div className="row ">
            <form className="mt-3">
              <input
                type="search"
                placeholder="enter a city"
                className="formControl col-9"
              />
              <button className="btn btn-success col-3">search</button>
            </form>
            <WeatherInfo />
            <h1 className="">{weatherData.city}</h1>
          </div>
          <div>
            <p>
              <FormattedDate date={weatherData.date} />
            </p>
          </div>
          <div className="weatherIcon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
              alt="rainy"
            />
          </div>

          <div>
            <h3>{Math.round(weatherData.temperature)}℃</h3>
          </div>
          <div>
            <h3 className="mb-3 text-capitalize">{weatherData.conditions}</h3>
          </div>
          <div className="row">
            <div className="col-6">
              <p>{weatherData.humidity} %</p>
              <p>Humidity</p>
            </div>
            <div className="col-6">
              <p>{Math.round(weatherData.wind)} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "69fo350cf347a61tc6a94bf3497a464e";
    let city = "tokyo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
