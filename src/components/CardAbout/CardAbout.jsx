import React from "react";
import { CardAboutBox, CardAboutContainer, CardAboutLeft, CardAboutRight, CardAboutText, CardAboutTitle, CardButton } from "./styles/CardAbout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fondo from "../../../public/assets/img/fondo.png"
function CardAbout() {
  return (
    <CardAboutContainer>
      <CardAboutBox>
        <CardAboutLeft>
          <LazyLoadImage 
          src={fondo} style={{width:"100%"}} alt="imagen about"/>
        </CardAboutLeft>
        <CardAboutRight>
            <CardAboutTitle>Acerca de mi</CardAboutTitle>
            <CardAboutText>
            Hola, mi nombre es Yandry y tengo una gran afinidad hacía el trabajo colaborativo. Me gusta crear aplicaciones web que inspiren e involucren a las personas. Como desarrolador web, considero que un buen producto no solo brinda una solución ,sino que permita crear una experiencia emocional en las personas que lo usan.
            </CardAboutText>
            <CardButton key="more_about_me" to="/about">
                Mas acerca de mi
            </CardButton>
        </CardAboutRight>
      </CardAboutBox>
    </CardAboutContainer>
  );
}
export default CardAbout;
