import React, { useState, useEffect } from "react";
import "./App.css";
import { Data } from "./Sound";

function App() {
  const [letter, setLetter] = useState(null);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const filteredData = Data.filter((item) => {
        return item.letter === e.key || item.letter.toLowerCase() === e.key;
      });
      if (filteredData.length > 0) {
        new Audio(filteredData[0].src).play();
        setLetter(filteredData[0].letter);
      }
    });
  }, []);

  useEffect(() => {
    setLetter(null);
  }, [letter]);
  return (
    <div className="App">
      {Data.map((item) => {
        return (
          <div
            key={item.letter}
            className={item.letter === letter ? "box1" : "box"}
          >
            <div className="letter">{item.letter}</div>
            <div className="label">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
