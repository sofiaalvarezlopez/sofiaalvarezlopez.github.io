import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sofiaalvarezlopez",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sofia-alvarez-lopez/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "ResearchGate",
    link: "https://www.researchgate.net/profile/Sofia_Alvarez11",
    fontAwesomeIcon: "fab fa-researchgate",
    backgroundColor: "#00CCBB",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0003-8040-4936",
    fontAwesomeIcon: "fa-orcid",
    backgroundColor: "#0077B5",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sofiaalvarezl/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sofiaalvarezlopez/",
    fontAwesomeIcon: "fab fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:maria.sofia.alvarez.lopez@gmail.com",
    fontAwesomeIcon: "far fa-envelope",
    backgroundColor: "#D14836",
  },
];

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            key={media.name}
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
