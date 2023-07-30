import React, { useState } from "react";
import {
  ContainerElement,
  HeaderContainer,
  Label,
  Switch,
  Input,
  LinkPersonalized,
  NavPersonalized,
} from "./styles/header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";
import gmail from "../../../public/assets/icons/gmail.png"
import linkdn from "../../../public/assets/icons/linkedin.png"

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
      enlace: "mailto:yandry75@gmail.com?Subject=Oferta%20de%20trabajo%20",
      contentUrl: gmail,
    },
    {
      enlace: "https://www.linkedin.com/in/rafaelvillagomez/",
      contentUrl: linkdn,
    },
  ];

  const elemLink = LinkData.map((element) => {
    return (
      <LinkPersonalized to={element.enlace} contentUrl={element.contentUrl}>
        {element.contentUrl}
      </LinkPersonalized>
    );
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <ContainerElement>
          <h1 className="header__title">Yandry.Dev</h1>
        </ContainerElement>

        
           <NavPersonalized>
            {elemLink}
           </NavPersonalized>
       

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
