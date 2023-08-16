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
} from "./styles/Content";
import SliderCard from "../../components/Slider/SliderCard";


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
    <ContentMain>
      <Portada>
        <PortadaContainer>
         <PortadaBox>
         <PortadaTitle>Desarrollador Web</PortadaTitle>
         <PortadaImgMobile></PortadaImgMobile>
          <PortadaContent>
            Un desarrollador web enfocado en frontend que construye el frontend
            de sitios web y aplicaciones web que conducen al éxito del producto
            en general.
          </PortadaContent>
          <PortadaButton>
            <ButtonTitle>PROYECTOS</ButtonTitle>
          </PortadaButton>

         </PortadaBox>
         <PortadaImg>
          
         </PortadaImg>
         
          
        </PortadaContainer>
      </Portada>
       <SectionAbout>
        <AboutContent>
          <CommonTitle>Conoceme</CommonTitle>
        
          <CommonContent>
            Profesional con experiencia en tecnologías Front End (React, Vue,
            JavaScript, HTML, CSS) y Back End (Node, Express).
          </CommonContent>
          <CommonContent>
            También utilizo habitualmente Testing y TypeScript para garantizar
            la calidad de mi código. Resolutivo, eficaz y dedicado a trabajar
            para cumplir no solo mis objetivos sino los del grupo en que
            trabaje.
          </CommonContent>
        </AboutContent>
        <AboutSkills>
          <CommonTitle>Skills</CommonTitle>
          <ContentSkill>
          {elemSkill}
          </ContentSkill>
        </AboutSkills>
      </SectionAbout> 
     
    </ContentMain>
  );
}

export default Content;
