import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        Coded by Nthabi at{" "}
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>{" "}
        and open sourced on{" "}
        <a
          href="https://github.com/Nthabiblossom"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
