import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

export default function Content() {
  const theme = useTheme();
  return (
    <>
      <Grid container>
        <Grid item xs={6} px={6}>
          <Card
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              height: "100%",
              border: `2px ridge ${theme.palette.primary.main}`,
            }}
          >
            <CardHeader
              title="About Me"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.contrastText,
                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                border: `1px solid ${theme.palette.secondary.main}`,
                borderRadius: "5px",
                boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                textShadow: "none",
              }}
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                minus eveniet repellat vel beatae accusamus explicabo quaerat
                asperiores debitis totam obcaecati consectetur eaque doloribus
                adipisci neque iure distinctio, tenetur iusto? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Ea minus eveniet
                repellat vel beatae accusamus explicabo quaerat asperiores
                debitis totam obcaecati consectetur eaque doloribus adipisci
                neque iure distinctio, tenetur iusto? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ea minus eveniet repellat vel
                beatae accusamus explicabo quaerat asperiores debitis totam
                obcaecati consectetur eaque doloribus adipisci neque iure
                distinctio, tenetur iusto?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} px={6}>
          <Card
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              height: "100%",
              border: `2px ridge ${theme.palette.primary.main}`,
            }}
          >
            <CardHeader
              title="Experience & Skills"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.contrastText,
                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                border: `1px solid ${theme.palette.secondary.main}`,
                borderRadius: "5px",
                boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                textShadow: "none",
              }}
            />
            <CardContent>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                minus eveniet repellat vel beatae accusamus explicabo quaerat
                asperiores debitis totam obcaecati consectetur eaque doloribus
                adipisci neque iure distinctio, tenetur iusto? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Ea minus eveniet
                repellat vel beatae accusamus explicabo quaerat asperiores
                debitis totam obcaecati consectetur eaque doloribus adipisci
                neque iure distinctio, tenetur iusto? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ea minus eveniet repellat vel
                beatae accusamus explicabo quaerat asperiores debitis totam
                obcaecati consectetur eaque doloribus adipisci neque iure
                distinctio, tenetur iusto?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
