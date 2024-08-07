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
  PortadaTitleName,
} from "./styles/Content";

import { IoArrowBack } from "react-icons/io5";
import cv from "../../../public/assets/pdf/cv_yandry_villagomez.pdf";
import CardAbout from "../CardAbout/CardAbout";
import Skills from "../Skills/Skills";
import Proyects from "../Proyects/Proyects";
import { ButtonBack } from "../../pages/about/styles/about";

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
              <PortadaTitle>
                Soy <PortadaTitleName>Yandry Villa</PortadaTitleName>
              </PortadaTitle>
              <PortadaTitle>Desarrollador Web</PortadaTitle>
              <PortadaContent>
                 Un desarrollador web que construye el Front-end y Back-end de sitios y aplicaciones
                 web que conducen al éxito.
              </PortadaContent>
              <ContainerBtn>
                <PortadaButton aria-label="Ir a proyectos"  key={"proyectos"} to={"/proyects"}>
                  <ButtonTitle>Proyectos<BsLaptop/></ButtonTitle>
                </PortadaButton>
                <CvButton
                
                  href={cv}
                  target="_blank"
                  rel="cv"
                  download="cv_yandry_rafael_villagomez.pdf"
                  aria-label="Descargar curriculum."
                >
                  <ButtonTitle>
                   CV <FaFileDownload />
                  </ButtonTitle>
                </CvButton>
              </ContainerBtn>
            </PortadaBox>
          </PortadaContainer>
        </Portada>
        <CardAbout/>
        <Skills/>
        <Proyects/>
      </ContentMain>
    </>
  );
}

export default Content;
