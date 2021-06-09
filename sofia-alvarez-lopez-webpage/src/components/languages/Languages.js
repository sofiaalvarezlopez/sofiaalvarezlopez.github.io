import React from "react";
import "./Languages.css";
import styled from "styled-components";

const IconWrapper = styled.span`
. {
  background-color: ${(props) => props.backgroundColor};
}
&:hover {
  background-color: ${({ theme }) => theme.text};
  transition: 0.3s ease-in;
}
`;

const availableLanguages = [
    {
      name: "spanish",
      flag: "🇨🇴",
    },
    {
      name: "english",
      flag: "🇺🇸",
    },
    {
      name: "german",
      flag: "🇩🇪",
  
    },
    {
      name: "french",
      flag: "🇫🇷",
  
    },
  
  ];

export default function languages(props) {
    return (
      <div className="social-media-div">
    {availableLanguages.map((language) => {
    return (
    <a
      href="./"
      className="icon-button"
      key={language.name}
    >
      <IconWrapper {...language} {...props}>
      &nbsp;{language.flag}&nbsp;
      </IconWrapper>
      {/* <span></span> */}
    </a>
  );
})}
</div>
    );
  }
  






