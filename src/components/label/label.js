import { Link } from "@reach/router";
import React from "react";

const label = ({ title, label, linkTo = "#" }) => (
  <div className="label">
    <div className="status">
      <Link to={linkTo}>
        <h1>{title}</h1>
        {label}
      </Link>
      <button>+</button>
    </div>
    <div className="first_button">
      <button>Learning</button>
      <button>Ny resolutions</button>
    </div>
  </div>
);

export default label;
