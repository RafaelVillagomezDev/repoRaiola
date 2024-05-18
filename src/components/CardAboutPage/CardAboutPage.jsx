import React from "react";
import {
  AboutContainer,
  AboutTitle,
  BoxAbout,
  CardAbout,
  TextCardAbout,
  TitleCardAbout,
} from "./styles/CardAboutPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contentSkills } from "./Card/content";
import { languageSkills } from "./Card/language_content";

function CardAboutPage() {
  return (
    <AboutContainer>
      <AboutTitle>Mis Habilidades</AboutTitle>
      <BoxAbout>
        {contentSkills.map((card) => {
          return (
            <CardAbout>
              <LazyLoadImage width={"30px"} key={card.id} src={card.thumbnail} alt={card.title} />
              <TitleCardAbout>{card.title}</TitleCardAbout>
              <TextCardAbout>{card.text}</TextCardAbout>
            </CardAbout>
          );
        })}
      </BoxAbout>
      <AboutTitle>Lenguajes y librerias Frontend</AboutTitle>
      <BoxAbout>
        {languageSkills.map((card) => {
          return (
            <CardAbout>
              <LazyLoadImage width={"30px"} key={card.id} src={card.thumbnail} alt={card.title} />
              <TitleCardAbout>{card.title}</TitleCardAbout>
              <TextCardAbout>{card.text}</TextCardAbout>
            </CardAbout>
          );
        })}
      </BoxAbout>
    </AboutContainer>
  );
}

export default CardAboutPage;
