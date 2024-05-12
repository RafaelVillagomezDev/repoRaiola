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
  const [isclicked, setIsClicked] = useState(false);

  const handleclose = () => {
    setIsClicked(!isclicked);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const LinkData = [
    {
      id: "inicio",
      name: "Inicio",
      enlace: "/home",
      contentUrl: gmail,
    },
    {
      id: "acerca",
      name: "Acerca de mi",
      enlace: "/about",
      contentUrl: linkdn,
    },
    {
      id: "proyectos",
      name: "Proyectos",
      enlace:
        "/about",
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
          <BtnTitle onClick={handleclose}>Yandry.dev</BtnTitle>
          <BtnBurguer onClick={handleclose}>
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
      <MenuBurguers isclicked={isclicked} handleclose={handleclose} />
    </ThemeProvider>
  );
}

export default Header;
