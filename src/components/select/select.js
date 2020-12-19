import React from "react";

import "./select.css";

const Select = ({ id, label, children, ...props }) => (
  <div className="select">
    <label htmlFor={id}>{label}</label>
    <select {...{ id, ...props }}>{children}</select>
  </div>
);
export default Select;
