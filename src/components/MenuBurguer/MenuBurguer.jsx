import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { BsLaptop } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
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

function MenuBurguers() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClose = () => {
    setIsClicked(!isClicked);
  };

  const LinkData = [
    {
      id: 1,
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      name: "Acerca de mi",
      icon: <FaFingerprint />,
    },
    {
      id: 2,
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
      <BtnTitle onClick={handleClose}>Yandry.dev</BtnTitle>
      <BtnBurguer   onClick={handleClose}>
        <FaBars  style={{ color: 'black' }} size={"18px"} />
      </BtnBurguer>
      <MenuBurguer isClicked={isClicked}>
        <HeaderMenuBurguer>
          <BtnCloseMenu  onClick={handleClose}>
            <FaSkullCrossbones style={{ color: 'black' }} size={"18px"} />
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
