import React, { lazy } from "react";

const Header=lazy(()=>import("../../components/Header/Header"))
const Content=lazy(()=>import("../../components/Content/Content"))
const Footer=lazy(()=>import("../../components/Footer/Footer"))

function Main() {
  return (
    <>
        <Header />
         <Content /> 
         <Footer/>
    </>
  );
}

export default Main;
