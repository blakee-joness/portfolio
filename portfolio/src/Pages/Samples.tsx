import {
  Typography,
  Button,
  TextField,
  Checkbox,
  Radio,
  Switch,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Slider,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControlLabel,
  Grid,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Samples() {
  // This page is used to showcase the several components made available in MUI so that I can how the theme affects them.
  // There maybe overflows in the page, but it is just for demonstration purposes.
  const components = [
    <Typography variant="h1">H1 Heading</Typography>,
    <Typography variant="h2">H2 Heading</Typography>,
    <Typography variant="h3">H3 Heading</Typography>,
    <Typography variant="body1">Body text</Typography>,
    <Button variant="contained" color="primary">
      Primary Button
    </Button>,
    <Button variant="contained" color="secondary">
      Secondary Button
    </Button>,
    <TextField label="Text Field" variant="outlined" />,
    <Checkbox />,
    <Radio />,
    <Switch />,
    <Card>
      <CardContent>
        <Typography variant="body1">Card Content</Typography>
      </CardContent>
    </Card>,
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">AppBar</Typography>
      </Toolbar>
    </AppBar>,
    <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />,
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>,
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>,
    <FormControlLabel control={<Checkbox />} label="Check me out" />,
  ];
  return (
    <Grid container spacing={4}>
      {components.map((Component, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ border: 1 }} key={index}>
          {Component}
        </Grid>
      ))}
    </Grid>
  );
}
