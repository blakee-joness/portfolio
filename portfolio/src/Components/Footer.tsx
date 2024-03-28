import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      px={2}
      py={1}
      bgcolor="primary.main"
      color="white"
      position="fixed"
      bottom={0}
      width="100%"
    >
      <Typography variant="body1" align="center">
        Check out my GitHub
      </Typography>
    </Box>
  );
}

export default Footer;
