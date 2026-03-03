import { Theme } from "@carbon/react";
import "@carbon/styles/css/styles.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./style.scss";

createRoot(document.getElementById("root")!).render(
  <Theme theme="white">
    <App />
  </Theme>,
);
