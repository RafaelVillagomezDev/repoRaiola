import React from "react";
import responsive from "../../../public/assets/icons/responsive_icon.png"
import {
  ButtonTitle,
  CardSkill,
  CardText,
  CardTitle,
  CarrousellSkills,
  ContainerSkills,
  LinkSkills,
  SkillTitle,
} from "./styles/Skils";
import { FaArrowRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";


function Skills() {
  return (
    <ContainerSkills>
      <SkillTitle>Mis habilidades</SkillTitle>
      <CarrousellSkills>
        <CardSkill>
          <LazyLoadImage src={responsive} />
          <CardTitle>Responsive Design</CardTitle>
          <CardText>
            Con mi experiencia en patrones de diseño responsive tengo una visión
            clara acerca de como implementarlos de manera efectiva en cualquier
            proyecto.
          </CardText>
        </CardSkill>
        <CardSkill>
          <LazyLoadImage src={responsive} />
          <CardTitle>Responsive Design</CardTitle>
          <CardText>
            Con mi experiencia en patrones de diseño responsive tengo una visión
            clara acerca de como implementarlos de manera efectiva en cualquier
            proyecto.
          </CardText>
        </CardSkill>
        <CardSkill>
          <LazyLoadImage src={responsive} />
          <CardTitle>Responsive Design</CardTitle>
          <CardText>
            Con mi experiencia en patrones de diseño responsive tengo una visión
            clara acerca de como implementarlos de manera efectiva en cualquier
            proyecto.
          </CardText>
        </CardSkill>
      </CarrousellSkills>
      <LinkSkills to="https://www.google.com/?hl=es" target="_blank">
         <ButtonTitle >Ver mas skills <FaArrowRight /></ButtonTitle>
      </LinkSkills>
    </ContainerSkills>
  );
}
export default Skills;
