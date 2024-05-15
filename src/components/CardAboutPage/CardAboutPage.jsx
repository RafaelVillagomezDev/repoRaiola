import React from "react";
import {
  AboutContainer,
  AboutTitle,
  BoxAbout,
  CardAbout,
} from "./styles/CardAboutPage";



function CardAboutPage() {
  return (
    <AboutContainer>
      <AboutTitle>Mis Habilidades</AboutTitle>
      <BoxAbout>
        <CardAbout></CardAbout>
        <CardAbout></CardAbout>
        <CardAbout></CardAbout>
        <CardAbout></CardAbout>
        <CardAbout></CardAbout>
        <CardAbout></CardAbout>
      </BoxAbout>
    </AboutContainer>
  );
}

export default CardAboutPage;
