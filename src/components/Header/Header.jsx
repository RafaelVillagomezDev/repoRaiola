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
import Form from "../Portals/Form";

function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [checked, setChecked] = useState(false);
  const [isclicked, setIsClicked] = useState(false);
  const [openPortal, setOpenPortal] = useState(false);

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

  const openPortalForm=()=>{
    setOpenPortal(!openPortal);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <ContainerElement>
          <BtnBurguer onClick={handleclose}>
            <FaBars style={{ color: "#FFF" }} size={"18px"} />
          </BtnBurguer>
        </ContainerElement>

        <NavPersonalized>{elemLink}</NavPersonalized>
        <ContainerElement>
        </ContainerElement>
        <ContainerElement>
          <Label>
            <Input
              id="checkbox-mode_dark"
              checked={checked}
              onClick={themeToggler}
              type="checkbox"
              onChange={handleChange}
            />
            <Switch />
          </Label>
          <ButtonContact onClick={openPortalForm}>Contactame</ButtonContact>
        </ContainerElement>
      </HeaderContainer>
      <MenuBurguers isclicked={isclicked} handleclose={handleclose} openPortalForm={openPortalForm}  />
      <Form  openPortal={openPortal}  openPortalForm={openPortalForm}/>
    </ThemeProvider>
  );
}

export default Header;
