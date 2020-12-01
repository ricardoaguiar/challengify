import React from "react";
import "./label.css";

const Label = ({ name, color }) => (
  <div
    className="label"
    style={{
      backgroundColor: color
    }}
  >
    {name}
  </div>
);

export default Label;
