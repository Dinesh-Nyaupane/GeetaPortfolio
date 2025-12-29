import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Debug helpers: make runtime errors visible in the browser console
console.log("[debug] main.jsx loaded — attempting to mount React app");
window.addEventListener("error", (e) => {
  console.error("[global error]", e.error || e.message, e);
});
window.addEventListener("unhandledrejection", (e) => {
  console.error("[unhandled rejection]", e.reason);
});

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("[debug] #root element not found");
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("[debug] React app mounted");
}
