import { Box } from "@mui/material";
import React from "react";
import "./About.css";
import Typography from "@mui/material/Typography";
import Rasm1 from "../About/img/about/1.jpg";
import Rasm2 from "../About/img/about/2.jpg";
import Rasm3 from "../About/img/about/3.jpg";
import Rasm4 from "../About/img/about/4.jpg";

const About = () => {
  return (
    <>
      <section className="timeline-section">
        <Box id="about" sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            ABOUT
          </Typography>{" "}
          <br />
          <Typography sx={{ fontStyle: "italic" }}>
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Box>{" "}
        <br />
        <Box className="timeline-items">
          <Box className="timeline-item">
            <Box
              className="timeline-dot"
              sx={{ backgroundImage: `url(${Rasm1})`, backgroundSize: "cover" }}
            ></Box>
            <Box className="timeline-date"></Box>
            <Box className="timeline-content" sx={{ pr: "10%" }}>
              <h3>Timeline</h3>
              <p id="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </Box>
          </Box>

          <Box className="timeline-item">
            <Box
              className="timeline-dot"
              sx={{ backgroundImage: `url(${Rasm2})`, backgroundSize: "cover" }}
            ></Box>
            <Box className="timeline-date"></Box>
            <Box className="timeline-content" sx={{ pr: "10%" }}>
              <h3>Timeline</h3>
              <p id="p1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </Box>
          </Box>

          <Box className="timeline-item">
            <Box
              className="timeline-dot"
              sx={{ backgroundImage: `url(${Rasm3})`, backgroundSize: "cover" }}
            ></Box>
            <Box className="timeline-date"></Box>
            <Box className="timeline-content" sx={{ pr: "10%" }}>
              <h3>Timeline</h3>
              <p id="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </Box>
          </Box>

          <Box className="timeline-item">
            <Box
              className="timeline-dot"
              sx={{ backgroundImage: `url(${Rasm4})`, backgroundSize: "cover" }}
            ></Box>
            <Box className="timeline-date"></Box>
            <Box className="timeline-content" sx={{ pl: "10%" }}>
              <h3>Timeline</h3>
              <p id="p1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="timeline-item" sx={{ ml: "1%" }}>
          {/* <Box className="timeline-dot" sx={{ bgcolor: "orangred" }}>
              
              
            <Typography sx={{ color: "white", fontWeight: "bold", mt: "10%" }}>
              Be Part <br />
              Of Our <br />
              Story
            </Typography>
          </Box> */}
          <Box className="timeline-content" sx={{ pl: "5%" }}></Box>
        </Box>
      </section>
    </>
  );
};

export default About;
