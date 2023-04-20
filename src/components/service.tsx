import React from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { services } from "@/data/service";
import { cuisine } from "@/data/cuisine";

const Service = () => {
  return (
    <div>
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
          Service
        </Typography>
        <br />
        <Typography sx={{ color: "#838383", mb: 5 }}>
          In unserem Restaurant <br /> werden Ihnen {cuisine.cuisine1},{" "}
          {cuisine.cuisine2} <br /> und {cuisine.cuisine3}
          Speisen serviert.
        </Typography>
        <Typography sx={{ color: "#838383", mb: 3 }}>
          Als Service wir Ihnen <br /> folgende Leistungen an:
        </Typography>
      </div>
      <Grid container>
        {services.map((data) => (
          <Grid
            pt={2}
            key={data.service}
            direction={"row"}
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              sx={{
                borderBottom: "1px solid #f1f1f1",
                mx: 2,
                paddingBottom: "16px",
              }}
              gap={2}
            >
              <img src={data.icon} />

              <Typography
                fontWeight={400}
                sx={{ fontSize: "12px", fontFamily: "Inter" }}
              >
                {data.service}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Service;
