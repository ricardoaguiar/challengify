import { Link } from "@reach/router";
import React from "react";

const label = ({ title, Label, linkTo = "#" }) => (
  <div className="label">
    <div className="status">
      <Link to={linkTo}>
        <h1>{title}</h1>
        {Label}
      </Link>
      <button>+</button>
    </div>
    <div className="challenge_tags">
      <form>
        <input type="Learnings" value="Learnings" />
        <input type="Ny resolutions" value="Ny resolutions" />
      </form>
    </div>
  </div>
);

export default label;
