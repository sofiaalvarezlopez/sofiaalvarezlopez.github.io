import React, { Component} from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};
/*
function GoDownEvent() {
  document.body.scrollTo;
  document.documentElement.scrollTop = 0;
}
*/
class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = "home";
    return (
      <Fade top duration={1000} distance="20px">
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                Sofía
              </span>
            </NavLink>
            
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
              <LinkScroll  
              to="about" 
              className="about-cursor"
              spy={true} 
              tag={Link}
              style={{ color: theme.text}}
              onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
              onMouseOut={(event) => onMouseOut(event)}
              >
                About
                </LinkScroll>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills+experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Skills+Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects+research"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects+Research
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/more"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  More
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact me
                </NavLink>
              </li>
              <li>

              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
