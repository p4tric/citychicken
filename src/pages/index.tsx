import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Divider,
  ListItemText,
  Drawer,
  IconButton,
  Stack,
  Grid,
} from "@mui/material";
import { address } from "@/data/address";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "@/components/common/custom-button";
import Nmage from "@/components/common/Nmage";

import theme from "@/styles/theme";
import About from "@/components/about";
import SliderComponent from "@/components/home-slider";
import Head from "next/head";
import MobileApplication from "@/components/mobile-application";
import Service from "@/components/service";
import Payments from "@/components/payments";
import Timings from "@/components/timings";
import BerlinMap from "@/components/map";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AvailableOnSection from "@/components/mobile-application";
import { colors } from "@/data/colors";
import Footer from "@/components/footer";
import ImageSlider from "@/components/home-slider";
import { useRouter } from "next/router";

// hooks
import useWindowSize from "@/hooks/useWindowSize";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "restaurant",
  "speisekarte",
  "services",
  "offnungszeiten",
  "standort",
];

const restaurantImage = "/Restaurant.png";

const LandingPage: React.FC = () => {
  const { isMobile } = useWindowSize();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState<string>("restaurant");
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const restaurant: any = document.getElementById("restaurant");
      const speisekarte: any = document.getElementById("speisekarte");
      const services: any = document.getElementById("services");
      const offnungszeiten: any = document.getElementById("offnungszeiten");
      const standort: any = document.getElementById("standort");

      if (
        offnungszeiten?.offsetTop <=
          window.pageYOffset + window.innerHeight / 2 &&
        offnungszeiten?.offsetTop + offnungszeiten?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("offnungszeiten");
      } else if (
        services?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        services?.offsetTop + services?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("services");
      } else if (
        speisekarte?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        speisekarte?.offsetTop + speisekarte?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("speisekarte");
      } else if (
        standort?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        standort?.offsetTop + standort?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("standort");
      } else if (
        restaurant?.offsetTop <= window.pageYOffset + window.innerHeight / 2 &&
        restaurant?.offsetTop + restaurant?.offsetHeight >
          window.pageYOffset + window.innerHeight / 2
      ) {
        setActiveSection("restaurant");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (section: string) => {
    let elementPosition: any;
    let headerOffset = 80;
    let element;

    // const element = document.getElementById(section);
    if (section === "restaurant") {
      headerOffset = 80;
      element = document.getElementById("restaurant");
    } else if (section === "speisekarte") {
      headerOffset = 80;
      element = document.getElementById("speisekarte");
    } else if (section === "services") {
      headerOffset = 80;
      element = document.getElementById("services");
    } else if (section === "offnungszeiten") {
      headerOffset = 80;
      element = document.getElementById("offnungszeiten");
    } else if (section === "standort") {
      headerOffset = 80;
      element = document.getElementById("standort");
    }

    elementPosition = element?.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    setTimeout(function () {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 50);
  };

  const isBrowser = () => typeof window !== "undefined";

  const handleRefresh = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttons = [
    "restaurant",
    "speisekarte",
    "services",
    "offnungszeiten",
    "standort",
  ];

  return (
    <>
      <Box>
        {isMobile ? (
          <AppBar sx={{ backgroundColor: "#DD2E35" }}>
            <Box component="nav">
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  textAlign={"left"}
                  sx={{
                    px: 5,
                    flexGrow: 1,
                    color: "#fff",
                    fontSize: "1.7rem",
                    fontWeight: 400,
                    fontFamily: "Contrail One !important",
                  }}
                >
                  City Chicken <br />{" "}
                  <span style={{ fontSize: "0.875rem" }}>
                    Das Original seit 1996
                  </span>
                </Typography>
                <IconButton
                  sx={{ float: "right", mx: 2 }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Stack>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "block", md: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
                  <img
                    src="/logo.svg"
                    style={{ width: "480px", height: "80px" }}
                    alt="climateChange"
                  />
                  <Divider />
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton
                          sx={{
                            textTransform: "capitalize",
                            textAlign: "center",
                          }}
                          onClick={() => window.location.replace(`#${item}`)}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
          </AppBar>
        ) : (
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: "#fff",
              color: "#333",
              boxShadow: "none",
              flexDirection: { md: "row" },
              textAlign: "center",
              flexGrow: 1,
              maxHeight: "121px",
            }}
          >
            <>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
                onClick={handleRefresh}
              >
                <img
                  src="/logo.svg"
                  // sx={{
                  //   height: {
                  //     xs: "100px",
                  //     sm: "100px",
                  //     md: "100px",
                  //     lg: "121px",
                  //     xl: "121px",
                  //   },
                  // }}
                  style={{
                    width: "280px",
                    height: "121px",
                  }}
                />
                {/* <Nmage
                  src="/logo.png"
                  width={180}
                  height={180}
                  style={{ padding: "30px 2rem" }}
                /> */}
              </Box>
              <Toolbar
                disableGutters
                sx={{
                  justifyContent: "space-between",
                  flexDirection: { xs: "row", sm: "row" },
                  alignItems: { xs: "center", md: "center", lg: "center" },
                  backgroundColor: `${colors.backgroundColor}`,
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "16%",
                      lg: "17%",
                      xl: "22%",
                    },
                  }}
                >
                  <Typography
                    textAlign={"left"}
                    sx={{
                      padding: {
                        xs: "1px 10px",
                        sm: "1px 10px",
                        md: "1px 10px",
                        lg: "1px 20px",
                        xl: "1px 20px",
                      },
                      flexGrow: 1,
                      color: "#fff",
                      fontSize: {
                        xs: 19,
                        sm: 19,
                        md: 19,
                        lg: 24,
                        xl: 40,
                      },
                      fontWeight: 400,
                      fontFamily: "Contrail One !important",
                    }}
                  >
                    City Chicken{" "}
                  </Typography>
                  <Typography
                    sx={{
                      px: 5,
                      flexGrow: 1,
                      color: "#fff",
                      fontWeight: 400,
                      fontFamily: "Contrail One !important",
                      fontSize: {
                        xs: "0.675rem",
                        sm: "0.675rem",
                        md: "0.675rem",
                        lg: "0.875rem",
                        xl: "0.875rem",
                      },
                      padding: {
                        xs: "1px 10px",
                        sm: "1px 10px",
                        md: "1px 10px",
                        lg: "1px 20px",
                        xl: "1px 20px",
                      },
                    }}
                  >
                    Das Original seit 1996
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: { xs: 2, sm: 0 },
                    flexGrow: 2,
                    marginLeft: {
                      xs: "9px",
                      sm: "9px",
                      md: "9px",
                      lg: 10,
                      xl: 10,
                    },
                  }}
                >
                  <Box
                    sx={
                      {
                        // background: {
                        //   xs: "red",
                        //   sm: "orange",
                        //   md: "yellow",
                        //   lg: "green",
                        //   xl: "blue",
                        // },
                      }
                    }
                  >
                    {buttons?.map((button) => (
                      <Button
                        key={button}
                        color="inherit"
                        sx={{
                          marginRight: {
                            xs: 0.8,
                            sm: 0.8,
                            md: 0.5,
                            lg: 0.9,
                            xl: 4,
                          },
                          textTransform: "capitalize !important",
                          color: "#fff",
                          fontFamily: "Inter !important",
                          marginBottom: { xs: 0, sm: 0, md: -4 },
                          fontWeight: 400,
                          fontSize: {
                            xs: "0.8em",
                            sm: "0.8em",
                            md: "0.7em",
                            lg: "0.9em",
                            xl: "1em",
                          },
                        }}
                        onClick={() => handleSectionClick(`${button}`)}
                      >
                        {button}
                        {activeSection == `${button}` && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 2,
                              left: 0,
                              right: 0,
                              height: 3,
                              backgroundColor: `${colors.secondaryColor}`,
                              color: "#fff",
                            }}
                          />
                        )}
                      </Button>
                    ))}
                  </Box>
                </Box>
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
                        fontWeight: 600,
                        height: "32px !important",

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
                      color: "#fff",
                      fontFamily: "Nunito Sans",
                      textAlign: "left",
                      fontSize: "14px",
                    }}
                  >
                    foodfood <br />{" "}
                    <span style={{ fontSize: "10px" }}>Business Partner</span>
                  </Typography>
                </Box>
              </Toolbar>
            </>
          </AppBar>
        )}

        <section id="" style={{}}>
          <Nmage
            remote
            height={800}
            width={1000}
            style={{
              width: "100%",
              // objectPosition,
            }}
            src={restaurantImage}
            alt=""
            // className={classes.bannerImage}
          />
        </section>

        <section id="restaurant">
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <About />
          </Container>
          <ImageSlider />
        </section>
        <section id="speisekarte" style={{}}>
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <AvailableOnSection />
          </Container>
        </section>
        <section
          id="services"
          style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <Service />

            <Payments />
          </Container>
        </section>
        <section
          id="offnungszeiten"
          style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
          {/* <Container sx={{ pt: 10 }}> */}
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <Timings />
          </Container>
        </section>
        <section
          id="standort"
          style={{ backgroundColor: "#fff", minHeight: "100vh" }}
        >
          <Container maxWidth="md" sx={{ pt: 10 }}>
            <div style={{ marginLeft: "10%" }}>
              <Typography
                sx={{
                  flexGrow: 1,
                  color: "#3B3A4A ",
                  fontSize: "32px",
                  fontWeight: 400,
                  fontFamily: "Contrail One !important",
                }}
              >
                Standort
              </Typography>
            </div>
          </Container>

          <Box>
            <BerlinMap />
          </Box>

          <Container maxWidth="md" sx={{ pt: 10 }}>
            <div
              style={{
                width: "60%",
                marginLeft: "10%",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={6} sx={{ p: 2, px: 4 }}>
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
                <Grid
                  item
                  xs={6}
                  sx={{ borderBottom: "1px solid #f1f1f1", pb: 2 }}
                >
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
            </div>
          </Container>
        </section>
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
