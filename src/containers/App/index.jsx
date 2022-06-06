/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";

import Services from "../../components/Services";
import Card from "../../components/Card";
import Portfolio from "../../components/Portfolio/Indexx";
import Header from "../../components/Header/Content";
import Header2 from "../../components/Header/Sidebar/index";
import Img from "../../components/Img";
import About from "../../components/About/About";
import Input from "../../components/Input";

import bgi from "../../assets/header-bg.jpg";

export default () => {
  const content = useRoutes(routes);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundImage: `url(${bgi})`,
          // width: "100%",
          // backgroundColor: "#27262B",
        }}
      >
        <Header2 />
        <Header />
      </div>
      <Services />
      <div style={{ backgroundColor: "#F8F9FA" }}>
        <Portfolio />
      </div>

      <div>
        <About />
      </div>

      <div style={{ backgroundColor: "#F8F9FA" }}>
        <Card />
      </div>

      <div>
        <Img />
      </div>
      {/* {content} */}

      <div>
        <Input />
      </div>
    </div>
  );
};
