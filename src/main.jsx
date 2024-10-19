import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/style.scss";
import { RouterProvider } from "react-router-dom";
import router from "./route/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);