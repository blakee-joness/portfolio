import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          J
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
