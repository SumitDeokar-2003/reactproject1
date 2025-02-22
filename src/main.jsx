import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
