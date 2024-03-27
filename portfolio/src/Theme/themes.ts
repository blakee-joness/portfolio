import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Set the mode to 'dark'
    primary: {
      main: "#7E7F9A",
    },
    secondary: {
      main: "#4B244A",
    },
    background: {
      default: "#080708", // Dark background color
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
          backgroundColor: "#4B244A",
          color: "#efefef",
          "&:hover": {
            backgroundColor: "#8E8358",
          },
        },
      },
    },
  },
});

export default theme;
