import React from "react";
import {
  FooterColumn,
  FooterComponent,
  FooterContainer,
  FooterText,
  FooterTitle,
  FooterTitleNav,
  LinkContainer,
  LinkTel,
} from "./styles/Footer";
import gmail from "../../../public/assets/icons/gmail.png";
import linkdn from "../../../public/assets/icons/linkedin.png";
import whatsapp from "../../../public/assets/icons/whatsapp.png";
import { LinkPersonalized } from "../Header/styles/header";
function Footer() {
  const LinkData = [
    {
      id: 1,
      enlace: "mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20",
      contentUrl: gmail,
    },
    {
      id: 2,
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      contentUrl: linkdn,
    },
    {
      id: 3,
      enlace:
        "https://wa.me/618152241?text=Hola%20Yandry%20me%20gustaria%20hablar%20de%20trabajo%20",
      contentUrl: whatsapp,
    },
  ];

  const elemLink = LinkData.map((element) => {
    return (
      <LinkPersonalized
        to={element.enlace}
        key={element.id}
        contentUrl={element.contentUrl}
      >
        {element.contentUrl}
      </LinkPersonalized>
    );
  });
  return (
    <>
      <FooterComponent>
        <FooterContainer>
          <FooterColumn>
            <FooterTitle>YandryDev</FooterTitle>
          </FooterColumn>
          <FooterColumn>
            <FooterTitleNav>Inicio</FooterTitleNav>
            <FooterText target="_blank" >Acerca de mi</FooterText>
            <FooterText target="_blank" >Proyectos</FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterTitleNav>Contáctame</FooterTitleNav>
            <FooterText  target="_blank" to="mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20">Correo</FooterText>
            <FooterText  target="_blank" to="https://www.linkedin.com/in/rafaelvillagomez/">Linkdn</FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterTitleNav>Social</FooterTitleNav>
            
          </FooterColumn>
        </FooterContainer>
      </FooterComponent>
    </>
  );
}

export default Footer;
