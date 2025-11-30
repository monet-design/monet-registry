import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ComponentRenderer } from "./ComponentRenderer";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ComponentRenderer />
  </StrictMode>
);
