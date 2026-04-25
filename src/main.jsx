import React from "react";
import { createRoot } from "react-dom/client";
import CampusPulse from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CampusPulse />
  </React.StrictMode>
);
