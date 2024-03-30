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
  BtnBurguer,
} from "./styles/header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";
import gmail from "../../../public/assets/icons/gmail.png";
import linkdn from "../../../public/assets/icons/linkedin.png";
import whatsapp from "../../../public/assets/icons/whatsapp.png";
import MenuBurguers from "../MenuBurguer/MenuBurguer";

function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <ContainerElement>
          
          <MenuBurguers/>
        </ContainerElement>

        <NavPersonalized></NavPersonalized>

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
        </ContainerElement>
      </HeaderContainer>
     
    </ThemeProvider>
  );
}

export default Header;
