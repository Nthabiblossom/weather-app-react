import React from "react";
import "./Forecast.css";
import Axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "69fo350cf347a61tc6a94bf3497a464e";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast mt-5">
      <h3>5-Day Forecast</h3>
      <div className="row">
        <div className="col-6">Monday Clear</div>
        <div className="col-6">30° / 15°</div>
      </div>
    </div>
  );
}
