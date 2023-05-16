import React from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import { address } from "@/data/address";
const BerlinMap = () => {
  const apiKey = "2e91ac8112445fe7";

  const array = ["City Chicken", "Email  City Chicken", "101781   Berlin"];
  return (
    <Box py={10}>
      <div style={{ height: "400px", width: "100%" }}>
        <iframe
          width="100%"
          style={{ marginBottom: "50px" }}
          height="450"
          aria-hidden="false"
          src={`${address.map}`}
        ></iframe>
        <Container sx={{ mb: 4, fontFamily: "Inter" }}> </Container>
      </div>
    </Box>
  );
};

export default BerlinMap;
