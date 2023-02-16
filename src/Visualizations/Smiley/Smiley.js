import React from "react";
import classes from "./Smiley.module.css";

const Smiley = () => {
  const width = 960;
  const height = 700;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffSetX = 120;
  const eyeOffSetY = 150;
  const eyeRadius = 50;
  const r = centerY - strokeWidth / 2;
  return (
    <svg className={classes.svg}>
      <circle
        cx={centerX}
        cy={centerY}
        fill="yellow"
        r={r}
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={centerX - eyeOffSetX}
        cy={centerY - eyeOffSetY}
        fill="black"
        r={eyeRadius}
        stroke="black"
        strokeWidth="10"
      />
      <circle
        cx={centerX + eyeOffSetX}
        cy={centerY - eyeOffSetY}
        fill="black"
        r={eyeRadius}
        stroke="black"
        strokeWidth="10"
      />
    </svg>
  );
};

export default Smiley;
