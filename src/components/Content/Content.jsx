import React, { lazy } from "react";
import { FaFileDownload } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
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
  ContainerBtn,
  CvButton,
} from "./styles/Content";


import cv from "../../../public/assets/pdf/cv_yandry_villagomez.pdf";

const Card=lazy(()=>import("../Card/Card"));
const Footer=lazy(()=>import("../Footer/Footer"))

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
                Un desarrollador web que construye el frontend de sitios y
                aplicaciones web que conducen al éxito.
              </PortadaContent>
              <ContainerBtn>
                <PortadaButton href="#container_proyect">
                  <ButtonTitle>PROYECTOS <BsLaptop/></ButtonTitle>
                </PortadaButton>
                <CvButton
                  href={cv}
                  target="_blank"
                  rel="cv"
                  download="cv_yandry_rafael_villagomez.pdf"
                >
                  <ButtonTitle>
                    CV <FaFileDownload />
                  </ButtonTitle>
                </CvButton>
              </ContainerBtn>
            </PortadaBox>
            <PortadaImg></PortadaImg>
          </PortadaContainer>
        </Portada>
        <SectionAbout>
          <AboutContent>
            <CommonTitle>Conóceme</CommonTitle>

            <CommonContent>
              Profesional con experiencia y conocimientos en diferencias tecnologías Front End (React, Vue,
              JavaScript, HTML, CSS) y Back End (Node,Express,Php).
            </CommonContent>
            <CommonContent>
              También utilizo habitualmente Testing y TypeScript para garantizar
              la calidad de mi código . Soy una persona resolutiva, eficaz y
              dedicada a trabajar para cumplir no solo mis objetivos sino los
              del equipo en el que trabaje.
            </CommonContent>
          </AboutContent>
         
        </SectionAbout>
        <AboutSkills>
            <CommonTitle>Skills</CommonTitle>
            <ContentSkill>{elemSkill}</ContentSkill>
          </AboutSkills> 
        <CardContainer id="container_proyect">
          <CommonTitleV1>Proyectos </CommonTitleV1>
          <Card id="card-content"/>
        </CardContainer>
      </ContentMain>

      <Footer />
    </>
  );
}

export default Content;
