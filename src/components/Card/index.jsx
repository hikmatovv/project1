import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Grid from "@mui/material/Grid";

import img1 from "../../assets/img/team/1.jpg";
import img2 from "../../assets/img/team/2.jpg";
import img3 from "../../assets/img/team/3.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from 'react-icons/fa'

export default () => {
  return (
    <>
      <Grid
        id="team"
        sx={{
          backgroundColor: "#F8F9FA",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Container>
          <Grid sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: " sans-serif",
                fontSize: "40px",
                alignItems: "center",
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              OUR AMAZING TEAM{" "}
            </Typography>
            <Typography sx={{font:'16px',color:'#6c757d'}}>
              {" "}
              <i>Lorem ipsum dolor sit amet consectetur.</i>{" "}
            </Typography>
          </Grid>

          <Grid container>
            <Grid
              pt="3%"
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "70px",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={img1}
                sx={{ width: '14rem', height: '14rem',border:'8px solid #DFE0E1' }}
              />
              <Typography mt='3%' variant='h4' sx={{color:'#212529',fontWeight:'bold', fontSize: "30px", fontFamily: "Montserrat" }}>
                Parveen Anand
              </Typography>
              <Typography color="#83757D">Lead Designer</Typography>
              <Typography
                mt="3%"
                ml="-10%"
                sx={{ display: "flex", flexDirection: "row" }}
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
                <Typography ml="34%" mr="34%">
                  <FaFacebookF
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#000000",
                      color: "white",
                      fontSize: "30px",
                      padding: "18%",
                    }}
                  />
                </Typography>
                <Typography>
                  <FaLinkedinIn
                    style={{
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
              pt="3%"
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "70px",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={img2}
                sx={{ width: '14rem', height: '14rem' ,border:'8px solid #DFE0E1'}}
              />
              <Typography mt='3%' variant='h4' sx={{color:'#212529',fontWeight:'bold', fontSize: "30px", fontFamily: "Montserrat"}}>
                Diana Peterson
              </Typography>
              <Typography color="#83757D">Lead Marketer</Typography>
              <Typography
                mt="3%"
                ml="-10%"
                sx={{ display: "flex", flexDirection: "row" }}
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
                <Typography ml="34%" mr="34%">
                  <FaFacebookF
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#000000",
                      color: "white",
                      fontSize: "30px",
                      padding: "18%",
                    }}
                  />
                </Typography>
                <Typography>
                  <FaLinkedinIn
                    style={{
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
              pt="3%"
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "70px",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={img3}
                sx={{ width: '14rem', height: '14rem',border:'8px solid #DFE0E1' }}
              />
              <Typography mt='3%' variant='h4' sx={{color:'#212529',fontWeight:'bold', fontSize: "30px", fontFamily: "Montserrat"}}>
                Larry Parker
              </Typography>
              <Typography color="#83757D">Lead Designer</Typography>
              <Typography
                mt="3%"
                ml="-10%"
                sx={{ display: "flex", flexDirection: "row" }}
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
                <Typography ml="34%" mr="34%">
                  <FaFacebookF
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#000000",
                      color: "white",
                      fontSize: "30px",
                      padding: "18%",
                    }}
                  />
                </Typography>
                <Typography>
                  <FaLinkedinIn
                    style={{
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
          </Grid>

          <Grid mt="4%" sx={{ textAlign: "center" }}>
            <Typography color="#757D7D">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              quis facilis dolore obcaecati sint?
            </Typography>
            <Typography color="#757D7D">
              {" "}
              sit amet consectetur adipisicing elit. Aspernatur ullam suscipit
              accusantium.
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};
