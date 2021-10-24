import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function randomColor() {
//   // const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
//   const color = Math.floor(
//     Math.random() * (16777215 - 1000000) + 1000000
//   ).toString(16);
//   console.log(color);
// }

// randomColor();
