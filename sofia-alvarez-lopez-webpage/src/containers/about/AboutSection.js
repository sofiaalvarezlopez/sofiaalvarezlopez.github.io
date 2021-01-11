import React, { Component } from "react";
import "./About.css";
import { Fade } from "react-reveal";
import PhysicsAndCS from "./PhysicsAndCSImg";





class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <PhysicsAndCS  theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
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
                          Hi! I’m Sofía, a 20-year-old colombian who majors in Physics and Computer Science. I’m a fast learner and love diving into new technologies, physics and topics.
                        </p>
                        <p
                          className="subTitle skills-text skills-font-size"
                          style={{ color: theme.secondaryText }}
                        >
My current interests are High Energy Physics, Quantum Computing, Image Processing, Computer Vision, Machine Learning and Human-Computer Interaction.
                        </p>
                  </div>
                </Fade>
              </div>
            </div>
      </div>
    );
  }
}

export default SkillSection;
