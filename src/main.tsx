import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import "./index.scss";

// Fonts
import "./fonts/Cinzel/Cinzel-Regular.ttf";
import "./fonts/Cinzel/Cinzel-Bold.ttf";
import "./fonts/Merriweather/Merriweather-Regular.ttf";
import "./fonts/Merriweather/Merriweather-Light.ttf";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
