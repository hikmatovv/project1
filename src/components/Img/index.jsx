import React from "react";
import Grid from "@mui/material/Grid";
import image1 from "../../assets/img/logos/facebook.svg";
import image2 from "../../assets/img/logos/google.svg";
import image3 from "../../assets/img/logos/ibm.svg";
import image4 from "../../assets/img/logos/microsoft.svg";

const index = () => {
  return (
    <>
      <Grid
        pt="5%"
        pb="5%"
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Grid x={12} sm={3} md={3} lg={3} textAlign="center">
          <img width="50%" src={image4} />
        </Grid>

        <Grid x={12} sm={3} md={3} lg={3} textAlign="center">
          <img width="50%" src={image2} />
        </Grid>
        <Grid x={12} sm={3} md={3} lg={3} textAlign="center">
          <img width="50%" src={image1} />
        </Grid>

        <Grid x={12} sm={3} md={3} lg={3} textAlign="center">
          <img width="50%" src={image3} />
        </Grid>
      </Grid>
    </>
  );
};

export default index;
