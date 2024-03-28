import { useTheme } from "@emotion/react";
import {
  Card as MUICard,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function Card() {
  const theme = useTheme();
  return (
    <MUICard
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        height: "100%",
      }}
    >
      <CardHeader
        title="Card 2"
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
        <Typography variant="h5" gutterBottom>
          Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2
          Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2
          Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2
        </Typography>
        <Typography variant="body2">
          This is the second card. This is the second card. This is the second
          card. This is the second card. This is the second card. This is the
          second card. This is the second card. This is the second card. This is
          the second card. This is the second card. This is the second card.
          This is the second card. This is the second card. This is the second
          card. This is the second card. This is the second card.
        </Typography>
      </CardContent>
    </MUICard>
  );
}
