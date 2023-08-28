import React from "react";
import { proyects } from "../../proyects";
import { Swiper, SwiperSlide } from "swiper/react";

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
import { Scrollbar } from 'swiper/modules';
function Card() {
  return (
    <Swiper spaceBetween={10} slidesPerView={2}>
   
      {proyects.map((slide) => {
        return (
          <SwiperSlide className="swiper-slide ">
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
