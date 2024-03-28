import { AppBar, Avatar, Button, Toolbar } from "@mui/material";

export default function Header() {
  return (
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
  );
}
