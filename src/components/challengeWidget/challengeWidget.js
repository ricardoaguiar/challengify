import { Link } from "@reach/router";
import React from "react";

import "./challengeWidget.css";

const ChallengeWidget = ({ title, label, linkTo = "#" }) => (
  <div className="challengeWidget">
    <Link to={linkTo}>
      <h1>{title}</h1>
      <Link to={label} />
    </Link>
    <div className="status">
      <button>+</button>
    </div>
    <div className="Challenge_tags">
      <button>Learning</button>
      <button>Ny resolutions</button>
    </div>

    <div className="discription">
      <p>
        read at least two books every month <br></br>
        from 21 January 2021 until 31 December 2021
      </p>
    </div>

    <div className="markers">
      <button>3</button>
      <button>1</button>
      <button>3</button>
      <button>2</button>
      <button>0</button>
      <button>3</button>
      <button>+</button>
    </div>
  </div>
);

export default ChallengeWidget;
