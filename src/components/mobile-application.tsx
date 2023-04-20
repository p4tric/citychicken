import React from "react";
import {
  Container,
  Typography,
  Divider,
  Button,
  Grid,
  Box,
} from "@mui/material";
import GoogleDeviceImage from "./google-device-image.png";
import AndroidDeviceImage from "./android-device-image.png";
import GooglePlayStoreButton from "./google-play-store-button.png";
import AppleAppStoreButton from "./apple-app-store-button.png";
import CustomButton from "./common/custom-button";
import theme from "@/styles/theme";

const AvailableOnSection: React.FC = () => {
  return (
    <Grid container justifyContent={"center"} mb={10} alignItems={"center"}>
      <Grid item xs={4}>
        <Box mb={10}>
          <Typography
            sx={{
              flexGrow: 1,
              color: "#3B3A4A",
              fontSize: "1.7rem",
              fontWeight: 400,
              mb: 3,
              fontFamily: "Contrail One !important",
            }}
          >
            Speisekarte
          </Typography>
          <Typography sx={{ color: "#838383", mb: 5 }}>
            Lade dir jetzt die foodysee App <br /> runter und finde <br />{" "}
            unsere Speisen in ihrem Handy
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Box>
              <CustomButton
                sx={{
                  maxWidth: "98px",
                  width: "62px !important",
                  fontFamily: "Nunito Sans !important",
                  fontSize: "0.875rem",
                  color: "#000",
                  padding: "10px 20px",
                  backgroundColor: "#D9D9D9 !important",
                  boxShadow: "none",
                  textTransform: "capitalize",
                  borderRadius: "0px !important",
                  fontWeight: 700,
                  height: "31px !important",

                  "&:hover": {
                    backgroundColor: "#fff !important",
                    boxShadow: "none",
                    border: "1px solid #C4C4C4",
                    color: theme.palette.text.primary,
                  },
                  mt: 4,
                }}
                size="small"
                text="Logo"
                variant="contained"
                type="submit"
              />
            </Box>
            <Divider
              orientation="vertical"
              color="#fff"
              sx={{
                color: "#fff !important",
                height: "40px",
                width: "2px !important",
                mx: 1,
                mt: 4,
              }}
            />
            <Typography
              mt={4}
              mr={5}
              sx={{
                color: "#000",
                fontFamily: "Nunito Sans",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              foodfood <br />{" "}
              <span style={{ fontSize: "10px" }}>Business Partner</span>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          borderInline: { md: "1px solid #c5c5c5" },
          borderBlock: {
            xs: "1px solid #c5c5c5",
            sm: "1px solid #c5c5c5",
            md: "none",
          },
          px: 5,
          py: { xs: 10, sm: 10 },
        }}
      >
        <img src="/iphone.svg" style={{ marginBottom: "30px" }} />
        <img src="/apple.svg" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          borderInline: { md: "1px solid #c5c5c5" },
          borderBlock: {
            xs: "1px solid #c5c5c5",
            sm: "1px solid #c5c5c5",
            md: "none",
          },
          px: 5,
          py: { xs: 10, sm: 10 },
        }}
      >
        <img src="/iphone.svg" style={{ marginBottom: "30px" }} />
        <img src="/googleplay.svg" />
      </Grid>
    </Grid>
  );
};

export default AvailableOnSection;
