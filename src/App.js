import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <p>
          Coded by Nthabi at{" "}
          <a href="https://www.shecodes.io/" target="_blank">
            SheCodes
          </a>{" "}
          and open sourced on <a>GidHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
