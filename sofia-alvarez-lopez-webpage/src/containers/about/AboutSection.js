import React, { Component } from "react";
import "./About.css";
import { Fade } from "react-reveal";
import PhysicsAndCS from "./PhysicsAndCSImg";
import Personal from "./PersonalImg"
import { NavLink, Link } from "react-router-dom";

class AboutSection extends Component {
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
                          But everyone calls me Sofi. <br/>I'm a 20-year-old colombian 🇨🇴 who majors in <b>Physics</b> 🔭 and <b>Computer Science</b> 👩‍💻. I’m a fast learner and love diving into new technologies, physics and topics 👩‍🎓.
                        </p>
                        <p
                          className="subTitle skills-text skills-font-size"
                          style={{ color: theme.secondaryText }}
                        >
                          My current interests are: High Energy Physics, Quantum Computing, Image Processing, Computer Vision, Machine Learning and Human-Computer Interaction.
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
                        While I love coding and learning Physics (view <NavLink to="/skills+experience" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>Skills+Experience</NavLink> and 
                        <NavLink to="/projects+research" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}> Projects+Research</NavLink> sections), on my free time I love playing the piano 🎹, 
                        playing tenis 🎾, hiking 🥾, volunteering 🙏 and spending time with my family 👨‍👩‍👧 and friends (view <NavLink to="/more" tag={Link} activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>More</NavLink> section).
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
            <div>
            </div>
      </div>
    );
  }
}

export default AboutSection;
