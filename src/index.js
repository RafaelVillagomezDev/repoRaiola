import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main=lazy(()=>import("./pages/main/Main"))
const ErrorPage=lazy(()=>import("./pages/error/error-page"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Main/>,
    errorElement: <ErrorPage />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
