import React, { Component } from "react";
import "./About.css";
import { Fade } from "react-reveal";
import PhysicsAndCS from "./PhysicsAndCSImg";
import Personal from "./PersonalImg";
import CV from "./CVImg";
import { NavLink, Link } from "react-router-dom";
import Resume from "../../assets/other/Resume.pdf";
import Button from "../../components/button/Button";

class AboutSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="skills-main-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <PhysicsAndCS theme={theme} />
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                Hi, I'm Sofia!
              </h1>
            </Fade>
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                &nbsp;
              </h1>
            </Fade>
            <Fade right duration={2000}>
              <div>
                <p
                  className="subTitle skills-text skills-font-size"
                  style={{ color: theme.secondaryText }}
                >
                  But everyone calls me Sofi. <br />
                  I'm a first-year <b>Physics</b> graduate student at MIT in the
                  Astrophysics division 🔭. I graduated from Universidad de Los
                  Andes (Bog, 🇨🇴) in 2023 with degrees in <b>Physics</b> and{" "}
                  <b>Systems and Computing Engineering</b> 👩‍💻.
                </p>
                <p
                  className="subTitle skills-text skills-font-size"
                  style={{ color: theme.secondaryText }}
                >
                  As a member of the MIT Kavli Institute for Astrophysics and
                  Space Research and the LIGO Scientific Collaboration, my main
                  research interest is gravitational-wave (GW) (astro)physics.
                  I'm interested in using Bayesian statistics and data science
                  techniques to understand the populations of black holes and
                  neutron stars in our Universe from their gravitational-wave
                  imprint. Additionally, I work on detector characterization and
                  data calibration efforts to assist in GW searches and
                  discoveries. I also find fascinating new challenges and
                  detections coming up in next-generation gravitational-wave
                  observatories, such as LISA and the Cosmic Explorer.
                </p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="skills-main-div">
          <Fade left duration={2000}>
            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  Additionally...
                </h1>
              </Fade>
              <Fade left duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  &nbsp;
                </h1>
              </Fade>
              <Fade left duration={2000}>
                <div>
                  <p
                    className="subTitle skills-text skills-font-size"
                    style={{ color: theme.secondaryText }}
                  >
                    While I love coding and learning Physics (view{" "}
                    <NavLink
                      to="/skills+experience"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      style={{ color: theme.text }}
                    >
                      Skills+Experience
                    </NavLink>{" "}
                    and
                    <NavLink
                      to="/projects+research"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      style={{ color: theme.text }}
                    >
                      {" "}
                      Projects+Research
                    </NavLink>{" "}
                    sections), in my free time I love playing the piano 🎹,
                    playing tennis 🎾, hiking 🥾, volunteering 🙏 and spending
                    time with my family 👨‍👩‍👧 and friends (view{" "}
                    <NavLink
                      to="/more"
                      tag={Link}
                      activeStyle={{ fontWeight: "bold" }}
                      style={{ color: theme.text }}
                    >
                      More
                    </NavLink>{" "}
                    section).
                  </p>
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div className="skills-image-div">
              <Personal theme={theme} />
            </div>
          </Fade>
        </div>
        <div></div>
        <div>
          <Fade right duration={1000}>
            <p
              className="subTitle skills-text skills-font-size"
              style={{ color: theme.text, textAlign: "center" }}
            >
              In this webpage, I want to show you what I love, what I’m working
              on, and what I’m interested in. <br />
              Here’s my CV! Feel free to download it.
            </p>
          </Fade>
          <div>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <Fade bottom duration={2000}>
                <div className="image-cv">
                  <CV theme={theme} />
                </div>
              </Fade>
            </a>
            <Fade bottom duration={2000}>
              <div className="download-button">
                <Button
                  text="Download CV"
                  theme={theme}
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutSection;
