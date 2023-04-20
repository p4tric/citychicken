import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PeopleIcon from "@mui/icons-material/People";
import CakeIcon from "@mui/icons-material/Cake";
import ParkIcon from "@mui/icons-material/Park";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Grid, Stack, Typography } from "@mui/material";
import { payment } from "@/data/payments";

const Payments = () => {
  return (
    <div>
      <div>
        <Typography sx={{ color: "#838383" }}>
          Sie können bei ins vor Ort mit <br /> folgenden Zahlungsmittel zahlen:
        </Typography>
      </div>
      <Grid py={8} container>
        {payment.map((data) => (
          <Grid
            pt={2}
            key={data.name}
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
                {data.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Payments;
