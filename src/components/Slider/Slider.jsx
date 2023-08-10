import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContainer } from "./styles/slider";
import slides from "../../proyects.json"

function Slider() {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {slides.map((slide)=>{
        <SwiperSlide>
            <h1>{slide.title}</h1>
        </SwiperSlide>
      })}
    
       
      </Swiper>
    </SliderContainer>
  );
}

export default Slider;
