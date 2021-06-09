import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => {
  const onClick = (event) => {
    props.handleDayNightToggle(event.target.checked);
  };
  return (
    <div className="switch-box">
      <div className="switch">
        <label htmlFor="toggle">
          <input
            id="toggle"
            className="toggle-switch"
            type="checkbox"
            onClick={onClick}
          />
          <div className="sun-moon"></div>
          <div className="background"></div>
          <div className="fill"></div>
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
