import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./big/App";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
