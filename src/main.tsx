import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
