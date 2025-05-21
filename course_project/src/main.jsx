import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { SearchProvider } from "./componentsHome/SearchContext";

createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
