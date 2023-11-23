import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: "Monday 22 Nov 07:00 ",
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
            <h1 className="">{weatherData.city}</h1>
          </div>
          <div>
            <p>{weatherData.date}</p>
          </div>
          <div className="weatherIcon">
            <img src={weatherData.icon} alt={weatherData.conditions} />
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

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
