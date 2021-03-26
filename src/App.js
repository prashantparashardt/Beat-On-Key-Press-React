import React, { useState, useEffect } from "react";
import "./App.css";
import { Data } from "./Sound";

function App() {
  const [audio, setaudio] = useState(null);
  const [letter, setLetter] = useState(null);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const filteredData = Data.filter((item) => {
        return item.letter === e.key || item.letter.toLowerCase() === e.key;
      });
      if (filteredData.length > 0) {
        setaudio(new Audio(filteredData[0].src));
        setLetter(filteredData[0].letter);
      }
    });
  }, []);

  useEffect(() => {
    if (audio !== null) {
      audio.play();
    }
  }, [audio]);
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
