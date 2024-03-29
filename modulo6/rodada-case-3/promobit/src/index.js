import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyled } from "./global/GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <GlobalStyled />
  </StrictMode>
);
