import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather mt-5">
      <div className="row">
        <form>
          <input
            type="search"
            placeholder="enter a city"
            className="formControl col-9"
          />
          <button className="btn btn-success col-3">search</button>
        </form>
        <h1>Pretoria</h1>
      </div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="partly cloudy"
      />

      <div>
        <h3>32℃</h3>
      </div>
      <div>
        <h3>Clear sky</h3>
      </div>
      <div className="row">
        <div className="col-6">
          <p>25 %</p>
          <p>Humidity</p>
        </div>
        <div className="col-6">
          <p>27 km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}
