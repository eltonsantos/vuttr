import { ThemeProvider } from "styled-components";

import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Middle from "./components/Middle";
import Card from "./components/Card";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);
  
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Middle />
        <Card />
      </ThemeProvider>
    </div>
  );
};

export default App;
