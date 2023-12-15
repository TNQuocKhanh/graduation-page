import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RoomIcon from "@mui/icons-material/Room";
import { Divider } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SwipeableTextMobileStepper from "../about";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";

const HomeHero: FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "background.paper",
        position: "relative",
        pt: 2,
        pb: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          color: "#36e52b",
          py: { xs: 1, md: 4 },
        }}
      >
        <Container>
          <Box
            sx={{
              borderRadius: 10,
              py: { xs: 2, md: 2 },
              px: { xs: 4, md: 2 },
              textAlign: "center",
            }}
          >
            <SwipeableTextMobileStepper />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          sx={{ flexDirection: { xs: "column", md: "unset" } }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: "relative",
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: "relative",
                      color: "primary.main",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      backgroundColor: "unset",
                    }}
                  >
                    You're invited{" "}
                    <Box
                      sx={{
                        position: "absolute",
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: "rotate(3deg)",
                        "& img": {
                          width: { xs: 146, md: 210 },
                          height: "auto",
                        },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img
                        src="/images/headline-curve.svg"
                        alt="Headline curve"
                      />
                    </Box>
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      position: "relative",
                      "& svg": {
                        position: "absolute",
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: "auto",
                      },
                    }}
                  >
                    to
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#127C71"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#127C71"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#127C71"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{" "}
                  <br />
                  Quốc Khánh's
                  <br />
                  <Typography
                    component="mark"
                    sx={{
                      position: "relative",
                      color: "primary.main",
                      fontSize: "50px",
                      fontWeight: "inherit",
                      backgroundColor: "unset",
                    }}
                  >
                    Graduation Ceremony
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: "relative" }}>
            {/* Sertificate badge */}
            <Box sx={{ lineHeight: 0 }}>
              <Image
                src="/images/hero.png"
                width={775}
                height={900}
                alt="Hero img"
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: "background.paper",
            color: "#36e52b",
            py: { xs: 4, md: 4 },
          }}
        >
          <Container>
            <Box
              sx={{
                backgroundColor: "secondary.main",
                backgroundImage: `url('https://t4.ftcdn.net/jpg/03/70/35/65/360_F_370356524_7x9V1bkGksKyTJzskUVbxIv81KVx2yT0.webp')`,
                borderRadius: 10,
                py: { xs: 2, md: 10 },
                px: { xs: 4, md: 8 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h1"
                component="h2"
                sx={{ mb: 1, fontSize: { xs: 32, md: 38 } }}
              >
                Ho Chi Minh City University of Technology and Education
              </Typography>

              <Divider sx={{ background: "#36e52b", borderBottomWidth: 5 }} />

              <Typography
                variant="h1"
                component="h2"
                sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}
              >
                GRADUATION CEREMONY 2023
              </Typography>

              <Divider sx={{ background: "#36e52b", borderBottomWidth: 5 }} />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-around",
                  width: { xs: "100%", md: 560 },
                  mx: "auto",
                  my: 5,
                }}
              >
                <Container>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                      <Box>
                        <AccessTimeFilledIcon />
                      </Box>
                      <Box>
                        <Typography variant="h4">Friday</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">
                          22<sup>th</sup> December
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">11am-1pm</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">4:30pm-5:30pm</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Divider orientation="vertical" flexItem />
                    </Grid>

                    <Grid item xs={12} md={5}>
                      <Box>
                        <RoomIcon />
                      </Box>
                      <Box>
                        <Typography variant="h4">
                          01 Vo Van Ngan St.,
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">Linh Chieu Ward</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">Thu Duc City</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">HCMC</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              <Divider sx={{ background: "#36e52b" }} />

              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <InfoIcon /> &nbsp;
                <Typography>
                  1pm - 4:30pm (Ceremony at the Hội Trường Lớn)
                </Typography>
              </Box>
              <Typography sx={{ mb: 6, fontStyle: "italic" }}>
                Your presence is my honor, thank you very much.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <PhoneIcon /> &nbsp;
                <Typography sx={{ mb: 1 }}>0966 230 556</Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
