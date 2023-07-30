import React from "react";
import {
  ButtonTitle,
  ContentMain,
  Portada,
  PortadaButton,
  PortadaContainer,
  PortadaContent,
  PortadaTitle,
  SectionAbout,
  AboutSkills,
  AboutContent,
} from "./styles/Content";

function Content() {
  return (
    <ContentMain>
      <Portada>
        <PortadaContainer>
          <PortadaTitle>Full Stack Developer</PortadaTitle>
          <PortadaContent>
            Un desarrollador web enfocado en frontend que construye el frontend
            de sitios web y aplicaciones web <br /> que conducen al éxito del
            producto en general.
          </PortadaContent>
          <PortadaButton>
            <ButtonTitle>PROYECTOS</ButtonTitle>
          </PortadaButton>
        </PortadaContainer>
      </Portada>
      <SectionAbout>
         <AboutContent>hsjs</AboutContent>
         <AboutSkills>jshsj</AboutSkills>
      </SectionAbout>
    </ContentMain>
  );
}

export default Content;
