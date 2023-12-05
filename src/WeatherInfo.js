import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <div>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div className="weatherIcon">
        <img src={props.data.iconUrl} alt={props.data.conditions} />
      </div>

      <div>
        <h3>{Math.round(props.data.temperature)}℃</h3>
      </div>
      <div>
        <h3 className="mb-3 text-capitalize">{props.data.conditions}</h3>
      </div>
      <div className="row">
        <div className="col-6">
          <p>{props.data.humidity} %</p>
          <p>Humidity</p>
        </div>
        <div className="col-6">
          <p>{Math.round(props.data.wind)} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}
