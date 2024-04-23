import React, { lazy } from "react";

const Header=lazy(()=>import("../../components/Header/Header"))
const Content=lazy(()=>import("../../components/Content/Content"))

function Main() {
  return (
    <>

        <Header />
        <Content />
    </>
  );
}

export default Main;
