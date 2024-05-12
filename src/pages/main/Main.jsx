import React, { Suspense, lazy } from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";

const Header = lazy(() => import("../../components/Header/Header"));
const Content = lazy(() => import("../../components/Content/Content"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

function Main() {
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Header />
      <Content />
      <Footer />
    </Suspense>
  );
}

export default Main;
