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
  CommonTitle,
  CommonContent,
  ContentSkill,
  BoxSkill,
  PortadaBox,
  PortadaImg,
  PortadaImgMobile,
  CardContainer,
  Separator,
  CommonTitleV1,
  IconCohete,
} from "./styles/Content";
import Card from "../Card/Card";
import { proyects } from "../../proyects";
import Footer from "../Footer/Footer";

function Content() {
  const SkillsData = [
    {
      name: "JAVA",
    },
    {
      name: "CSS",
    },
    {
      name: "JS",
    },
    {
      name: "MYSQL",
    },
    {
      name: "PHP",
    },
    {
      name: "REACT",
    },
    {
      name: "NODE",
    },
  ];

  const elemSkill = SkillsData.map((element) => {
    return <BoxSkill key={element.name}>{element.name}</BoxSkill>;
  });

  return (
    <>
      <ContentMain>
        <Portada>
          <PortadaContainer>
            <PortadaBox>
              <PortadaTitle>Desarrollador Web</PortadaTitle>
              <PortadaImgMobile></PortadaImgMobile>
              <PortadaContent>
                Un desarrollador web que construye el frontend de sitios y aplicaciones web que conducen al éxito.
              </PortadaContent>
              <PortadaButton href="#container_proyect">
                <ButtonTitle>PROYECTOS</ButtonTitle>
              </PortadaButton>
            </PortadaBox>
            <PortadaImg></PortadaImg>
          </PortadaContainer>
        </Portada>
        <SectionAbout>
          <AboutContent>
            <CommonTitle>Conóceme</CommonTitle>

            <CommonContent>
              Profesional con experiencia en tecnologías Front End (React, Vue,
              JavaScript, HTML, CSS) y Back End (Node, Express).
            </CommonContent>
            <CommonContent>
              También utilizo habitualmente Testing y TypeScript para garantizar
              la calidad de mi código . Soy una persona resolutiva, eficaz y dedicada a trabajar
              para cumplir no solo mis objetivos sino los del equipo en el que trabaje.
            </CommonContent>
          </AboutContent>
          <AboutSkills>
            <CommonTitle>Skills</CommonTitle>
            <ContentSkill>{elemSkill}</ContentSkill>
          </AboutSkills>
        </SectionAbout>
        <CardContainer id="container_proyect">
          <CommonTitleV1>Proyectos </CommonTitleV1>
          <Card id="card_content" />
        </CardContainer>
      </ContentMain>

      <Footer />
    </>
  );
}

export default Content;
