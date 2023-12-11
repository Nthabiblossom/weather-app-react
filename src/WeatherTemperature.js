import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    fahrenheit();
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span>
          <h3>
            {Math.round(props.celsius)}℃ |{" "}
            <a href="/" onClick={showFahrenheit}>
              F
            </a>
          </h3>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <span>
          <h3>
            {Math.round(props.celsius)}
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            | F
          </h3>
        </span>
      </div>
    );
  }
}
