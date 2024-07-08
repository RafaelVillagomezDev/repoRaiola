import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

import {
  MenuBurguer,
  HeaderMenuBurguer,
  BtnCloseMenu,
  ContainerList,
  List,
  LinkList,
  ListMenu,
  LinkPersonalized,
  ContainerLink,
} from "./styles/menu";

import logoHeader from "../../../public/assets/icons/logoHeader.png";
import gmail from "../../../public/assets/icons/gmail.png";
import linkdn from "../../../public/assets/icons/linkedin.png";
import whatsapp from "../../../public/assets/icons/whatsapp.png";

function MenuBurguers(props) {
  
  const LinkData = [
    {
      id: "home",
      enlace: "/home",
      name: "Inicio",
      icon: <IoHomeOutline />,
    },
    {
      id: "about",
      enlace: "/about",
      name: "Acerca de mi",
      icon: <FaFingerprint />,
    },
    {
      id: "proyects",
      enlace: "/proyects",
      name: "Proyectos",
      icon: <BsLaptop />,
    },
  ];

 
 
  const ElemLink = LinkData.map((element) => {
    return (
      <List>
        <LinkList to={element.enlace} key={element.id} >
          {element.name} {element.icon}
        </LinkList>
      </List>
    );
  });

  const LinkDataFooter = [
    {
      id: "gmail",
      enlace: "mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20",
      contenturl: gmail,
    },
    {
      id: "linkdn",
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      contenturl: linkdn,
    },
    {
      id: "whatsapp",
      enlace:
        "https://wa.me/618152241?text=Hola%20Yandry%20me%20gustaria%20hablar%20de%20trabajo%20",
      contenturl: whatsapp,
    },
  ];

  const elemLinkFooter = LinkDataFooter.map((element) => {
    return (
      <LinkPersonalized
        to={element.enlace}
        key={element.id}
        contenturl={element.contenturl}
      >
        {element.contentUrl}
      </LinkPersonalized>
    );
  });

  return (
    <>
      <MenuBurguer isclicked={props.isclicked ? props.isclicked  : undefined}>
        <HeaderMenuBurguer>
          <BtnCloseMenu  onClick={props.handleclose ? props.handleclose  : undefined}>
            <FaX style={{ color: "#FFF" }} size={"18px"} />
          </BtnCloseMenu>
        </HeaderMenuBurguer>
        <ContainerList>
          <ListMenu>{ElemLink}</ListMenu>
          <ContainerList>
            <ContainerLink>{elemLinkFooter}</ContainerLink>
          </ContainerList>
        </ContainerList>
      </MenuBurguer>
    </>
  );
}

export default MenuBurguers;
