import React from "react";
import "./App.css";
import Weather from "./Components/Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
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
