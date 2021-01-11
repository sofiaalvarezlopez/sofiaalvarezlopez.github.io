import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import LandingPageImage from "./LandingPageImage";


export default function Greeting(props) {
  const theme = props.theme;
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
              <div className="titulo">
                <h1 className="greeting-text" style={{ color: theme.text}}>
                  &nbsp; Hi, I'm Sofía Álvarez
                </h1>
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  A hard-working and passionate <br/> Physics and Computer Science <br/> student from Colombia 🇨🇴
                </p>
                <SocialMedia theme={theme} />
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <LandingPageImage theme={theme} />
            </div>
          </div>
        </div>
      </Fade>
    );
}
