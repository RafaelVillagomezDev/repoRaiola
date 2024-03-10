import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./format.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
import ErrorPage from "./pages/error/error-page";

const router = createBrowserRouter([
  {
    path: "/porfolio",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Main/>,
  },
  {
    path: "/",
    element: <Main/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
