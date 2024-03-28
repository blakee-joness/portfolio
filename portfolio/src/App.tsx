import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { Suspense, createContext, useState } from "react";
import theme from "./Theme/themes";
import Homepage from "./Pages/Content";
import Header from "./Components/Header";

export const ThemeModeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
});

function App(): JSX.Element {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Suspense>
      <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Homepage />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </Suspense>
  );
}

export default App;
