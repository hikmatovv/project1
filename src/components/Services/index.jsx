import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import LockIcon from "@mui/icons-material/Lock";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ComputerIcon from "@mui/icons-material/Computer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "gray",
  boxShadow: "none",
}));

// const contactData = [
//     {
//       id: 1,
//       icon: <LocalGroceryStoreIcon />,
//       title: "E-Commerce",
//       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
//     },
//     {
//       id: 2,
//       icon: <LaptopIcon />,
//       title: "Responsive Design",
//     },
//     {
//       id: 3,
//       icon: <LockIcon />,
//       title: "Web Security",50px
//     },
//   ];

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", marginTop: "128px" }}
      >
        <Grid
          id="services"
          item
          md={12}
          sm={12}
          xs={12}
          sx={{ marginBottom: "10px" }}
        >
          <Item sx={{ fontSize: "43px", color: "black" }}>
            <b>SERVICES</b>
          </Item>
          <Item sx={{ fontSize: "15px" }}>
            <i>
              <b>Lorem ipsum dolor sit amet consectetur.</b>
            </i>
          </Item>
        </Grid>
        <Grid item md={2.8} sm={4} xs={12}>
          <Item sx={{ marginBottom: "10px" }}>
            <LocalGroceryStoreIcon
              sx={{
                fontSize: "170px",
                color: "white",
                bgcolor: "#FFC800",
                borderRadius: "100px",
                padding: "30px",
              }}
            />
          </Item>
          <Item sx={{ color: "black", fontSize: "24px", marginBottom: "20px" }}>
            <b>E-Commerce</b>
          </Item>
          <Item sx={{ fontSize: "17px", fontFamily: "-moz-initial" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
            Minima maxime quam architecto quo inventore <br /> harum ex magni,
            dicta impedit.
          </Item>
        </Grid>
        <Grid item md={2.8} sm={4} xs={12}>
          <Item sx={{ marginBottom: "10px" }}>
            <ComputerIcon
              sx={{
                fontSize: "170px",
                color: "white",
                bgcolor: "#FFC800",
                borderRadius: "100px",
                padding: "30px",
              }}
            />
          </Item>
          <Item sx={{ color: "black", fontSize: "24px", marginBottom: "20px" }}>
            <b>Responsive Design</b>
          </Item>
          <Item sx={{ fontSize: "17px", fontFamily: "-moz-initial" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
            Minima maxime quam architecto quo inventore <br /> harum ex magni,
            dicta impedit.
          </Item>
        </Grid>
        <Grid item md={2.8} sm={4} xs={12}>
          <Item sx={{ marginBottom: "10px" }}>
            <LockIcon
              sx={{
                fontSize: "170px",
                color: "white",
                bgcolor: "#FFC800",
                borderRadius: "100px",
                padding: "30px",
              }}
            />
          </Item>
          <Item sx={{ color: "black", fontSize: "24px", marginBottom: "20px" }}>
            <b>Web Security</b>
          </Item>
          <Item sx={{ fontSize: "17px", fontFamily: "-moz-initial" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
            Minima maxime quam architecto quo inventore <br /> harum ex magni,
            dicta impedit.
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
