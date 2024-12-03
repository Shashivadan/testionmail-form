import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import App from "./App.tsx";

createRoot(document.getElementById("testimonial-form")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
