import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

// Components
import Header from "./components/Header";

// Global Styles
import GlobalStyle from "./styles/global";

// Themes
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

// Utils
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
