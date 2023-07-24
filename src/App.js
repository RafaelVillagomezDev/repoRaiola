import React,{useState}  from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

 


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <div id="app" className="App">
        <Header handleTheme={themeToggler}></Header>
 
      </div>
      </ThemeProvider>
  );
}

export default App;
