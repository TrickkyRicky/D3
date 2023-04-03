import React from "react";
import { arc } from "d3";
import classes from "./Smiley.module.css";

const width = 960;
const height = 700;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffSetX = 120;
const eyeOffSetY = 150;
const eyeRadius = 50;
const r = centerY - strokeWidth / 2;

const mouthWidth = 20;
const mouthRadius = 180;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * (3 / 2));

const Smiley = () => {
  return (
    <svg className={classes.svg}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle fill="yellow" r={r} stroke="black" strokeWidth={strokeWidth} />
        <circle
          cx={-eyeOffSetX}
          cy={-eyeOffSetY}
          fill="black"
          r={eyeRadius}
          stroke="black"
          strokeWidth="10"
        />
        <circle
          cx={eyeOffSetX}
          cy={-eyeOffSetY}
          fill="black"
          r={eyeRadius}
          stroke="black"
          strokeWidth="10"
        />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
};

export default Smiley;
