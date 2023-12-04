import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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

  function search() {
    const apiKey = "69fo350cf347a61tc6a94bf3497a464e";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather mt-5 ">
        <div className="contents position-relative">
          <div className="row ">
            <form onSubmit={handleSubmit} className="mt-3">
              <input
                type="search"
                placeholder="enter a city"
                className="formControl col-9"
                onChange={handleCityChange}
              />
              <button className="btn btn-success col-3">search</button>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
