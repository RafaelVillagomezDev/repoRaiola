import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { BsLaptop } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
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
  BtnBurguer,
  BtnTitle,
} from "./styles/menu";

import logoHeader from "../../../public/assets/icons/logoHeader.png";
import gmail from "../../../public/assets/icons/gmail.png";
import linkdn from "../../../public/assets/icons/linkedin.png";
import whatsapp from "../../../public/assets/icons/whatsapp.png";

function MenuBurguers(props) {
  
  const LinkData = [
    {
      id: 1,
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      name: "Inicio",
      icon: <IoHomeOutline />,
    },
    {
      id: 2,
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      name: "Acerca de mi",
      icon: <FaFingerprint />,
    },
    {
      id: 3,
      enlace: "#",
      name: "Proyectos",
      icon: <BsLaptop />,
    },
  ];

 
 
  const ElemLink = LinkData.map((element) => {
    return (
      <List>
        <LinkList to={element.enlace} key={element.id} target="_blank">
          {element.name} {element.icon}
        </LinkList>
      </List>
    );
  });

  const LinkDataFooter = [
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

  const elemLinkFooter = LinkDataFooter.map((element) => {
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
      <MenuBurguer isClicked={props.isClicked}>
        <HeaderMenuBurguer>
          <BtnCloseMenu  onClick={props.handleClose}>
            <FaSkullCrossbones style={{ color: "#FFF" }} size={"18px"} />
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
