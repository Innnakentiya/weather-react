//import logo from "./logo.svg";
import "./App.css";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from "./WeatherApp.js";
import "./WeatherApp.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <WeatherApp />
      </div>
      <div className="footer">
        <small className="notation">
          <a
            href="https://github.com/Innnakentiya/weather-react"
            target="_blank"
          >
            Open-source code
          </a>
          ",by" Inna V.
        </small>
      </div>
    </div>
  );
}

export default App;
