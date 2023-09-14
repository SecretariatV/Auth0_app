import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthConfig from "./authConfig";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthConfig>
        <App />
      </AuthConfig>
    </BrowserRouter>
  </React.StrictMode>
);
