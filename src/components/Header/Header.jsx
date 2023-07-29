import React, { useState } from "react";
import { ContainerElement, HeaderContainer,Label,Switch,Input } from "./styles/header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";

function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <ContainerElement>
          <h1 className="header__title">Yandry.Dev</h1>
        </ContainerElement>

        <ContainerElement>
          <h1>hii</h1>
        </ContainerElement>

        <ContainerElement>
          <Label>
            <Input checked={checked}  onClick={themeToggler}type="checkbox" onChange={handleChange} />
            <Switch />
          </Label>
        </ContainerElement>
      </HeaderContainer>
    </ThemeProvider>
  );
}

export default Header;
