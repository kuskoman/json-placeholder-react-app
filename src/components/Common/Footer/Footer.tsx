import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1">My React App Footer</Typography>
        <Typography variant="body2" sx={{ color: "primary.contrastText" }}>
          © {new Date().getFullYear()} My React App
        </Typography>
      </Container>
    </Box>
  );
};
