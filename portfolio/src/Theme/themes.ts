import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Set the mode to 'dark'
    primary: {
      main: "#c8a356",
    },
    secondary: {
      main: "#341c62",
    },
    background: {
      default: "#1a0d29", // Dark background color
    },
    text: {
      primary: "#efefef", // Light text color for contrast
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#341c62",
          color: "#efefef",
          "&:hover": {
            backgroundColor: "#c8a356",
          },
        },
      },
    },
  },
});

export default theme;
