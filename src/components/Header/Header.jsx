import React, { useState } from "react";
import { HeaderContainer } from "./styles/header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Theme";



function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
       
        <button onClick={themeToggler}>Switch Theme</button>
      </HeaderContainer>
    </ThemeProvider>
  );
}

export default Header;
