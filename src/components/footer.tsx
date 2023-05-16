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

      <Container maxWidth="md" sx={{ pt: 10 }}>
        <div style={{ marginLeft: "10%" }}>
          <div>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#3B3A4A ",
                fontSize: "32px",
                fontWeight: 400,
                fontFamily: "Contrail One !important",
              }}
            >
              Impressum
            </Typography>
            <br />
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
          </div>
        </div>

        <div style={{ marginLeft: "10%" }}>
          <div>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#3B3A4A ",
                fontSize: "32px",
                fontWeight: 400,
                fontFamily: "Contrail One !important",
              }}
            >
              Datenschutz
            </Typography>
            <br />
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
          </div>
        </div>

        <div style={{ marginLeft: "10%" }}>
          <div>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#3B3A4A ",
                fontSize: "32px",
                fontWeight: 400,
                fontFamily: "Contrail One !important",
              }}
            >
              Allgemeine Geschaftsbedingungen
            </Typography>
            <br />
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>

            <Typography sx={{ color: "#838383", mb: 5, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor volutpat quam, at rhoncus dolor sollicitudin id. Nulla eu
              volutpat justo, sed aliquam arcu. In hac habitasse platea
              dictumst. Nulla malesuada tincidunt felis. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
