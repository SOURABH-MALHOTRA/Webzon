import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<BrowserRouter basename="/Webzon">
  <App />
</BrowserRouter>
  </React.StrictMode>
);
import { BrowserRouter } from 'react-router-dom';

// Aisa dikhna chahiye:
