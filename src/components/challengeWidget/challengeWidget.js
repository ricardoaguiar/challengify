import { Link } from "@reach/router";
import React from "react";

import "./challengeWidget.css";

const ChallengeWidget = ({ title, linkTo = "#" }) => (
  <div className="challengeWidget">
    <Link to={linkTo}>
      <h1>{title}</h1>
    </Link>
    <div className="cup">
      <button>+</button>
    </div>
    <div className="first_button">
      <button>Learning</button>
      <button>Ny resolutions</button>
    </div>

    <div className="discription">
      <p>
        read at least two books every month <br></br>
        from 21 January 2021 until 31 December 2021
      </p>
    </div>

    <div className="circules">
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
