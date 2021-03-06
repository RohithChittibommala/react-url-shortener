import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const BASE_URL = `https://cors.bridged.cc/https://cutt.ly/api/api.php`;
  const ref = useRef<HTMLInputElement>(null);

  const handleUrlShorten = () => {
    fetch(
      `${BASE_URL}?key=0ff7cfe93b777b337f48149939bf8d4baecdc&short=${ref.current?.value}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <div className="shorten" onClick={handleUrlShorten}>
        shorten
      </div>
    </div>
  );
}

export default App;
