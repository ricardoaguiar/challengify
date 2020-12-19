import React from "react";
import classNames from "classnames";

import "./button.css";

const Button = ({ children, className, ...props }) => (
  <button className={classNames("button", className)} {...props}>
    {children}
  </button>
);

export default Button;
