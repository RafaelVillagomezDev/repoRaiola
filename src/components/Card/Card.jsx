import React from "react";
import { proyects } from "../../proyects";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {
  CardImage,
  CardWrapper,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStats,
  LinkText,
  CardStatWrapper,
  Separator,
} from "./styles/Card";

// import required modules
import { Pagination } from "swiper/modules";
function Card() {
  return (
    
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      centeredSlides={true}
      updateOnWindowResize={true}
      initialSlide={0}
      centeredSlidesBounds={true}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        320: {
          width: 300,
          slidesPerView: 1,
        },
        400: {
          width: 340,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          width: 450,
          slidesPerView: 3,
        },
        950: {
          width: 500,
          slidesPerView: 1,
        },
      }}
    >
      {proyects.map((slide) => {
        return (
          <SwiperSlide className="swiper-slide">
            <CardWrapper key={slide.id} className="yandry">
              <CardImage background={slide.thumbnail} />
              <CardTextWrapper>
                <CardTextDate>days ago {slide.id}</CardTextDate>
                <CardTextTitle></CardTextTitle>
                <CardTextBody>
                  Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                  temporibus omnis illum maxime quod deserunt eligendi dolor
                </CardTextBody>
              </CardTextWrapper>
              <CardStatWrapper>
                <CardStats>
                  <LinkText href="#">website</LinkText>
                </CardStats>
                <CardStats>
                  <LinkText href="#">github</LinkText>
                </CardStats>
              </CardStatWrapper>
            </CardWrapper>
            <Separator></Separator>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Card;
