import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContainer } from "./styles/slider";
import { proyects } from "../../proyects";
// import required modules
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

function Slider() {

    
  return (
    <SliderContainer>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
      
      {proyects.map((slide)=>{
        return(<SwiperSlide  key={slide.id ? slide.id : index}>
        
        <img 
            width={300}
            height={300}
            src={slide?.thumbnail}
            alt={slide?.title}
          />
        </SwiperSlide>)
      })}
    
       
      </Swiper>
    </SliderContainer>
  );
}

export default Slider;
