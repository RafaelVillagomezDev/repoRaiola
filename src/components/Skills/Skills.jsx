import React from "react";
import responsive from "../../../public/assets/icons/responsive_icon.png"
import {
  CardSkill,
  CardText,
  CardTitle,
  CarrousellSkills,
  ContainerSkills,
  SkillTitle,
} from "./styles/Skils";
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
    </ContainerSkills>
  );
}
export default Skills;
