import React from "react";
import "./About.css";
import AboutSection from "./AboutSection";
import { Fade } from "react-reveal";


export default function About(props) {
  const theme = props.theme;
  return (
    <div className="main" id="about">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            ABOUT
          </h1>
        </Fade>
      </div>
      <AboutSection theme={theme} />
    </div>
  );
}
