import React, { useEffect } from "react";
import { statesData } from "./Data/Data";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import "./Style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "white",
  pt: 2,
  px: 4,
  pb: 3,
};

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "black",
  fontFamily:
    ' "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  boxShadow: "none",
  borderRadius: "0px",
  backgroundColor: "#F8F9FA",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F8F9FA",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontFamily:
    ' "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  boxShadow: "none",
  borderRadius: "0px",
}));
const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "BLACK",
  fontSize: "4vh",
  fontFamily:
    ' "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  boxShadow: "none",
  borderRadius: "0px",
}));
const Item4 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontFamily:
    ' "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  boxShadow: "none",
  borderRadius: "0px",
}));

const Rasm = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  paddingBottom: "0px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  borderRadius: "0px",
  background: "none",
}));
export const Partfolio = () => {
  const [open, setOpen] = React.useState(false);
  const [cardData, setCardData] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const data = statesData?.features.map((item) => {
      return { ...item, opacity: "0" };
    });
    setCardData(data);
  }, []);

  return (
    <div>
      <Box
        id="portfolio"
        sx={{
          flexGrow: 1,
          width: "80%",
          marginLeft: "10%",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Item sx={{ fontSize: "300%" }}>PORTFOLIO</Item>
        <Item sx={{ fontSize: "3vh" }}>
          Lorem ipsum dolor sit amet consectetur.
        </Item>
        <Grid container spacing={3} sx={{ marginTop: "5%" }}>
          {cardData.map((state, indx) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={`${indx + 1}`}>
                <Item
                  onMouseEnter={() => {
                    setCardData((prev) =>
                      prev?.map((item) => {
                        if (state.id === item.id) {
                          return {
                            ...item,
                            opacity: "1",
                          };
                        }
                        return item;
                      })
                    );
                  }}
                  onMouseLeave={() => {
                    setCardData((prev) =>
                      prev?.map((item) => {
                        if (state.id === item.id) {
                          return {
                            ...item,
                            opacity: "0",
                          };
                        }
                        return item;
                      })
                    );
                  }}
                >
                  <div className="yellowHover">
                    <Rasm
                      className="hower"
                      onClick={handleOpen}
                      onDoubleClick={handleClose}
                    >
                      <div className="plus" onClick={handleClose}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                          className="ishora uz"
                          onClick={handleClose}
                        >
                          <Button
                            onClick={handleOpen}
                            className="uz"
                            style={{
                              color: "white",
                              marginTop: "-370px",
                              top: "360px",
                              fontSize: "20vh",
                              opacity: state?.opacity,
                            }}
                          >
                            +
                          </Button>
                          <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClick={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open}>
                              <Box sx={style}>
                                <Typography
                                  id="transition-modal-description"
                                  sx={{ mt: 2, textAlign: "center" }}
                                >
                                  <Item3>
                                    <b>PROJECT NAME</b>
                                  </Item3>
                                  <img
                                    src={state.img}
                                    style={{ height: "300px" }}
                                    alt=""
                                  />
                                  <Item4>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nobis totam iste sint
                                    <br /> eligendi architecto assumenda quos
                                    ullam, impedit accusamus, beatae, maxime
                                    maiores laudantium possimus autem. <br />{" "}
                                    Doloremque quidem ducimus dolore aliquid.
                                  </Item4>
                                  <Item sx={{ marginTop: "10px" }}>
                                    <b>client:</b> ecplore
                                  </Item>
                                  <Item sx={{ marginTop: "10px" }}>
                                    <b>Cotegory:</b> Graphic design
                                  </Item>
                                  <Item sx={{ marginTop: "10px" }}>
                                    <Button
                                      variant="contained"
                                      sx={{
                                        backgroundColor: "yellow",
                                        ":hover": {
                                          backgroundColor: "rgb(177, 177, 7)",
                                        },
                                      }}
                                    >
                                      <b>x Close project</b>
                                    </Button>
                                  </Item>
                                </Typography>
                              </Box>
                            </Fade>
                          </Modal>
                        </div>
                      </div>
                      <img
                        src={state.img}
                        alt=""
                        className="imgHover"
                        style={{ width: "100%" }}
                      />
                    </Rasm>
                  </div>
                  <Item sx={{ fontSize: "3.5vh" }}>
                    {" "}
                    <b>{state.name}</b>{" "}
                    <Item2 sx={{ fontSize: "3vh" }}>
                      {" "}
                      <i>{state.title} </i>
                    </Item2>
                  </Item>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
