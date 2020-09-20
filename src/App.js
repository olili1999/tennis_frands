import React from "react";
import logo from "./logo.svg";
import "./App.css";

const TESTDATA = ["oliver", "james", "rohan", "bennett", "rylee"];

function App() {
  const cards = TESTDATA.map((person) => {
    return (
      <div className="card">
        <h1> {person}</h1>
      </div>
    );
  });
  return (
    <div className="App">
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
