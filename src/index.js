import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
import { HelmetProvider } from "react-helmet-async";

const Main = lazy(() => import("./pages/main/Main"));
const About = lazy(() => import("./pages/about/About"));
const ErrorPage = lazy(() => import("./pages/error/error-page"));
const Proyects = lazy(() => import("./pages/proyects/Proyects"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/proyects",
    element: <Proyects />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Suspense>
  </React.StrictMode>
);
