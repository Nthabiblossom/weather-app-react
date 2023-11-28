import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.dataInfo.city}</h1>

      <div>
        <p>
          <FormattedDate date={props.dataInfo.date} />
        </p>
      </div>
      <div className="weatherIcon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
          alt="rainy"
        />
      </div>

      <div>
        <h3>{Math.round(props.dataInfo.temperature)}℃</h3>
      </div>
      <div>
        <h3 className="mb-3 text-capitalize">{props.dataInfo.conditions}</h3>
      </div>
      <div className="row">
        <div className="col-6">
          <p>{props.dataInfo.humidity} %</p>
          <p>Humidity</p>
        </div>
        <div className="col-6">
          <p>{Math.round(props.dataInfo.wind)} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}
