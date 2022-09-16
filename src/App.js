import React from "react";
import "./App.css";
import Weather from "./Components/Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" units="metric" />
      </div>
      <footer className="text-center">
        The app was coded by Anna Kohut and is open-sourced.
      </footer>
    </div>
  );
}

export default App;
