import { Link } from "@reach/router";
import React from "react";
import "./label.css";

const label = ({ title, Label, linkTo = "#" }) => (
  <div className="label">
    <div className="status">
      <Link to={linkTo}>
        <h2>{title}</h2>
        {Label}
      </Link>
      <div className="challenge_status">+</div>
    </div>
    <div className="challenge_tags">
      <form className="status">
        <input type="Ny resolutions" value="Ny resolutions" />
      </form>
      <form>
        <input type="Learnings" value="Learnings" />
      </form>
    </div>
  </div>
);

export default label;
