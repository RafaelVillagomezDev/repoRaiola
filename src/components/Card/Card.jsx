import React from "react";
import { proyects } from "../../proyects";
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

function Card() {
  return proyects.map((slide) => {
    return (
      <>
        <CardWrapper key={slide.key} className="yandry">
          <CardImage background={slide.thumbnail} />
          <CardTextWrapper>
            <CardTextDate>days ago</CardTextDate>
            <CardTextTitle></CardTextTitle>
            <CardTextBody>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </CardTextBody>
          </CardTextWrapper>
          <CardStatWrapper>
            {/* <CardStats>
                <div>
                  1<sup>m</sup>
                </div>
                <div>read</div>
              </CardStats> */}
            <CardStats>
              <LinkText href="#">website</LinkText>
            </CardStats>
            <CardStats>
              <LinkText href="#">github</LinkText>
            </CardStats>
          </CardStatWrapper>
        </CardWrapper>
        <Separator></Separator>
      </>
    );
  });
}

export default Card;
