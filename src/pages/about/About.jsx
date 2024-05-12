import React, { Suspense, lazy } from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import { ContainerAbout } from "./styles/about";
const Header = lazy(() => import("../../components/Header/Header"));

function About() {
  return (
    <>
   <Suspense fallback={<LoadingScreen />}>
      <Header />
    </Suspense>
    </>
   
  );
}

export default About;
