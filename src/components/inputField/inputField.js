import React from "react";

import "./inputField.css";

const InputField = ({ id, label, ...props }) => (
  <div className="inputField">
    <label htmlFor={id}>{label}</label>
    <input {...{ id, ...props }} />
  </div>
);
export default InputField;
