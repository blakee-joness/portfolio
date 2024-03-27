import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { Suspense, createContext, useState } from "react";
import theme from "./Theme/themes";
import Homepage from "./Pages/Home";
import { Grid } from "@mui/material";
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
          <Grid container style={{ height: "100vh" }}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={2} sm={2} md={2} />
            <Grid item xs={8} sm={8} md={8}>
              <Homepage />
            </Grid>
            <Grid item xs={2} sm={2} md={2} />
          </Grid>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </Suspense>
  );
}

export default App;
