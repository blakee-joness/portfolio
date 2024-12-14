import { AppBar, Avatar, Button, Toolbar, CssBaseline } from "@mui/material";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Add margin to the body to prevent content from being hidden behind the header
    const toolbarHeight =
      document.querySelector(".MuiToolbar-root")?.clientHeight || 0;
    document.body.style.marginTop = `${toolbarHeight}px`;
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Avatar
              alt="Logo"
              src="monogram_j-transparent.png"
              sx={{ width: 56, height: 56, marginTop: 2, marginBottom: 2 }}
            />
          </div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
