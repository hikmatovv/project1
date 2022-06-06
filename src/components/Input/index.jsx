/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import Img from "../../assets/map-image.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Input from "./Input_type";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
  padding: "0px",
  margin: "0px",
}));

export default () => {
  const [, setValue] = React.useState("Controlled");

  return (
    <Box id="contact" sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#212529",
          backgroundImage: `url(${Img})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "7%",
          }}
        >
          <Typography
            sx={{ fontSize: "38px", color: "white", fontFamily: "arial black" }}
          >
            CONTACT US
          </Typography>
          <Typography
            sx={{
              color: "#6C757D",
              fontFamily: "sans-serif",
              fontSize: "18px",
            }}
          >
            <i>Lorem ipsum dolor sit amet consectetur.</i>
          </Typography>
        </Box>
        <Box>
          <Container maxWidth="lg">
            <Grid container spacing={0} sx={{ marginTop: "5%" }}>
              <Grid item xs={12} md={6} sm={12} lg={6} sx={{}}>
                <Item>
                  <input
                    type="name"
                    placeholder="Your Name*"
                    style={{
                      border: "2px solid white",
                      backgroundColor: "white",
                      color: "#CED4DA",
                      fontSize: "20px",
                      width: "95%",
                      height: "15%",
                      padding: "3%",
                      marginTop: "5%",
                      outline:"1px solid #FED136"
                    }}
                  />
                </Item>
                <Item>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    style={{
                      border: "2px solid white",
                      backgroundColor: "white",
                      color: "#CED4DA",
                      fontSize: "20px",
                      width: "95%",
                      height: "10%",
                      padding: "3%",
                      marginTop: "5%",
                      outline:"1px solid #FED136"
                    }}
                  />
                </Item>
                <Item>
                  <input
                    type="phone"
                    placeholder="Your Phone*"
                    style={{
                      border: "2px solid white",
                      backgroundColor: "white",
                      color: "#CED4DA",
                      fontSize: "20px",
                      width: "95%",
                      height: "10%",
                      padding: "3%",
                      marginTop: "5%",
                      outline:"1px solid #FED136"
                    }}
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={6} sm={12} lg={6} sx={{}}>
                <Item>
                  <input
                    type="phone"
                    placeholder="Your Message*"
                    style={{
                      border: "2px solid white",
                      backgroundColor: "white",
                      color: "#CED4DA",
                      fontSize: "20px",
                      width: "95%",
                      paddingBottom: "38%",
                      marginTop: "5%",
                      outline:"1px solid #FED136"
                    }}
                  />
                </Item>
              </Grid>
            </Grid>
            <Box
              sx={{
                marginTop: "3%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "5%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#B18E0E",
                  padding: "2%",
                  fontFamily: "arial black",
                  fontSize: "18px",
                  color: "#B1B1AD",
                  ":hover":{
                    backgroundColor:"#B18E0E"
                  }
                }}
              >
                Send Message
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={0} sx={{}}>
          <Grid
            xs={12}
            md={4}
            sm={4}
            lg={4}
            sx={{
              padding: "3%",
              textAlign: { md: "right", sm: "left", xs: "center" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "sans-serif",
                // fontSize: "17px",
                color: "#9B9090",
              }}
            >
              Copyright © Your Website 2022
            </Typography>
          </Grid>
          <Grid xs={12} md={4} sm={4} lg={4} sx={{ marginTop: "2%" }}>
            <Typography
              mt="3%"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>
                <TwitterIcon
                  sx={{
                    borderRadius: "100%",
                    backgroundColor: "#000000",
                    color: "white",
                    fontSize: "30px",
                    padding: "18%",
                  }}
                />
              </Typography>
              <Typography ml="5%" mr="5%">
                <FacebookIcon
                  sx={{
                    borderRadius: "100%",
                    backgroundColor: "#000000",
                    color: "white",
                    fontSize: "30px",
                    padding: "18%",
                  }}
                />
              </Typography>
              <Typography>
                <LinkedInIcon
                  sx={{
                    borderRadius: "100%",
                    backgroundColor: "#000000",
                    color: "white",
                    fontSize: "30px",
                    padding: "18%",
                  }}
                />
              </Typography>
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={4}
            sm={4}
            lg={4}
            sx={{
              padding: "3%",
              textAlign: { md: "left", sm: "right", xs: "center" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "sans-serif",
                // fontSize: "17px",
                color: "#9B9090",
              }}
            >
              Privacy Policy Terms of Use
            </Typography>  <Typography
              sx={{
                fontFamily: "sans-serif",
                // fontSize: "17px",
                color: "#9B9090",
              }}
            >
              Privacy Policy Terms of Use
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
