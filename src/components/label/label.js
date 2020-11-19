import { Link } from "@reach/router";
import React from "react";
import "./label.css";

const label = ({ title, Label, linkTo = "#" }) => (
  <div className="label">
    <div className="status">
      <Link to={linkTo}>
        <h1>{title}</h1>
        {Label}
      </Link>
      <div className="challenge_status">+</div>
    </div>
    <div className="challenge_tags">
      <form className="status">
        <input type="Learnings" value="Learnings" />
      </form>
      <form>
        <input type="Ny resolutions" value="Ny resolutions" />
      </form>
    </div>
  </div>
);

export default label;
