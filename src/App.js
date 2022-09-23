import React from "react";
import "./App.css";
import Weather from "./Components/Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App shadow-sm">
      <div className="container app__weather">
        <Weather defaultCity="Kyiv" />
      </div>
      <footer className="text-center">
        The app was coded by{" "}
        <a
          href="https://deluxe-starship-7c78b0.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anna Kohut
        </a>{" "}
        on the workshop from{" "}
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/AnnaKGT/weather-app_react_v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
