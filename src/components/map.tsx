import React from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import { address } from "@/data/address";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = ["City Chicken", "Email  City Chicken", "101781   Berlin"];
  return (
    <Box py={10}>
      <div style={{ height: "400px", width: "100%" }}>
        <Container maxWidth="md" sx={{ px: "0 !important" }}>
          <div>
            <Typography
              sx={{
                flexGrow: 1,
                color: "#3B3A4A ",
                fontSize: "32px",
                fontWeight: 400,
                fontFamily: "Contrail One !important",
                mb: 4,
              }}
            >
              Standort
            </Typography>
          </div>
        </Container>
        <iframe
          width="100%"
          style={{ marginBottom: "50px" }}
          height="450"
          aria-hidden="false"
          src={`${address.map}`}
        ></iframe>
        <Container sx={{ mb: 4, fontFamily: "Inter" }}>
          {" "}
          <Grid container spacing={5}>
            <Grid item xs={6} sx={{ p: 2, px: 5 }}>
              <Stack
                direction="row"
                sx={{ borderBottom: "1px solid #f1f1f1", pb: 2 }}
                justifyContent="space-between"
              >
                <Typography>{address.name}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sx={{ pb: 2 }}>
              <Stack
                direction="row"
                sx={{ borderBottom: "1px solid #f1f1f1", pb: 2 }}
                justifyContent="space-between"
              >
                <Typography>{address.sonnenallee}</Typography>
                <Typography>{address.value}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sx={{ borderBottom: "1px solid #f1f1f1", pb: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Email</Typography>
                <Typography>{address.email}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack
                direction="row"
                sx={{ borderBottom: "1px solid #f1f1f1", pb: 2 }}
                justifyContent="space-between"
              >
                <Typography>{address.pin}</Typography>
                <Typography>{address.city}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default BerlinMap;
