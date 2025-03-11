import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/normalize.css";
import "./styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Emoji-Quiz">
      <App />
    </BrowserRouter>
  </StrictMode>
);
