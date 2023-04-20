import React from "react";
import { Container, Box, Stack, Typography } from "@mui/material";
const footerLinks = ["Impressum", "Datenschutz", "AGB", "© CNetX GmbH"];
const Footer = () => {
  return (
    <footer>
      <Box sx={{ mt: 15, p: 4, background: "#000000" }}>
        <Container maxWidth="md">
          <Stack
            direction="row"
            justifyContent="center"
            gap={4}
            alignItems="center"
          >
            {footerLinks.map((link) => (
              <Typography
                sx={{
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 700,
                  "&:hover": { color: "#F7AB3C" },
                }}
                key={link}
              >
                {link}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
