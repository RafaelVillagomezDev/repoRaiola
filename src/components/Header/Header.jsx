import React, { useState } from "react";

import {
  ContainerElement,
  HeaderContainer,
  Label,
  Switch,
  Input,
  LinkPersonalized,
  NavPersonalized,
  HeaderTitle,
  ButtonContact,
} from "./styles/header";

import { BtnBurguer} from "../MenuBurguer/styles/menu"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";
import gmail from "../../../public/assets/icons/gmail.png";
import linkdn from "../../../public/assets/icons/linkedin.png";
import whatsapp from "../../../public/assets/icons/whatsapp.png";
import MenuBurguers from "../MenuBurguer/MenuBurguer";
import { BtnTitle } from "../MenuBurguer/styles/menu";
import { FaBars } from "react-icons/fa6";

function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [checked, setChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClose = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const LinkData = [
    {
      id: 1,
      name: "Inicio",
      enlace: "mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20",
      contentUrl: gmail,
    },
    {
      id: 2,
      name: "Acerca de mi",
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      contentUrl: linkdn,
    },
    {
      id: 3,
      name: "Proyectos",
      enlace:
        "https://wa.me/618152241?text=Hola%20Yandry%20me%20gustaria%20hablar%20de%20trabajo%20",
      contentUrl: whatsapp,
    },
  ];

  const elemLink = LinkData.map((element) => {
    return (
      <LinkPersonalized to={element.enlace} key={element.id}>
        {element.name}
      </LinkPersonalized>
    );
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <ContainerElement>
          <BtnTitle onClick={handleClose}>Yandry.dev</BtnTitle>
          <BtnBurguer onClick={handleClose}>
            <FaBars style={{ color: "#FFF" }} size={"18px"} />
          </BtnBurguer>
        </ContainerElement>

        <NavPersonalized>{elemLink}</NavPersonalized>
        <ContainerElement>
          <Label>
            <Input
              checked={checked}
              onClick={themeToggler}
              type="checkbox"
              onChange={handleChange}
            />
            <Switch />
          </Label>
          <ButtonContact>Contactame</ButtonContact>
        </ContainerElement>
      </HeaderContainer>
      <MenuBurguers isClicked={isClicked} handleClose={handleClose} />
    </ThemeProvider>
  );
}

export default Header;
