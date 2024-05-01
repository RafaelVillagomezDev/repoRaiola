import React from "react";
import { CardAboutBox, CardAboutContainer, CardAboutLeft, CardAboutRight, CardAboutText, CardAboutTitle, CardButton } from "./styles/CardAbout";

function CardAbout() {
  return (
    <CardAboutContainer>
      <CardAboutBox>
        <CardAboutLeft>

        </CardAboutLeft>
        <CardAboutRight>
            <CardAboutTitle>Acerca de mi</CardAboutTitle>
            <CardAboutText>
            Hola! mi nombre es Yandry y tengo una gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
            </CardAboutText>
            <CardButton>
                Mas acerca de mi
            </CardButton>
        </CardAboutRight>
      </CardAboutBox>
    </CardAboutContainer>
  );
}
export default CardAbout;
