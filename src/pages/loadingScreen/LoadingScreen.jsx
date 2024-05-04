import React, { lazy } from "react";
import animationData from "../../../public/assets/lottie/lazyLoadLottie.json";

import Lottie from "react-lottie-player";

function LoadingScreen() {
  return (
    <>
      <div id="container_lottie">
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 505, height: 950 }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
    </>
  );
}

export default LoadingScreen;
