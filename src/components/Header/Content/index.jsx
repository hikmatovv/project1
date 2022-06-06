  import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./index.css";
export default () => {
  return (
    <div>
      {/* <Container maxWidth="100%"> */}
      <Box sx={{ width: "100%", paddingTop: "70px" }}>
        <Grid
          container
          sx={{
            color: "white",
            textAlign: "center",
            paddingTop: "10%",
            paddingBottom: "20%",
          }}
        >
          <Grid
            item
            md={12}
            lg={12}
            sm={12}
            xs={12}
            sx={{ fontSize: "2.25rem" }}
          >
            Welcome To Our Studio!
          </Grid>
          <Grid
            item
            md={12}
            lg={12}
            sm={12}
            xs={12}
            sx={{ fontSize: " 4.5rem", fontWeight: "700", marginTop: "30px" }}
            className="tittle"
          >
            IT'S NICE TO MEET YOU
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12} className="tittle">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#services"
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  marginTop: "30px",
                  padding: "1.25rem 2.5rem",
                  backgroundColor: "#FFC800",
                  ":hover": { backgroundColor: "#FFC000" },
                }}
                className="button"
              >
                TELL ME MORE
              </Button>
            </a>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </div>
  );
};
