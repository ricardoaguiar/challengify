import { Link } from "@reach/router";
import React from "react";

import { Label } from "../components";

import "./challengeWidget.css";

const ChallengeWidget = ({ title, labels, linkTo = "#" }) => (
  <div className="challengeWidget">
    <header>
      <div className="title">
        <Link to={linkTo}>
          <h2>{title}</h2>
        </Link>
        <span className="statusIcon">✔</span>
      </div>
      <div className="labels">
        {labels.map(({ name, color }) => (
          <Label name={name} color={color} />
        ))}
      </div>
    </header>
    <p className="description">
      Read at least two books every month <br></br>
      From 21 January 2021 until 31 December 2021
    </p>
    <div className="markers">
      <span className="marker">3</span>
      <span className="marker">1</span>
      <span className="marker">3</span>
      <span className="marker">2</span>
      <span className="marker">0</span>
      <span className="marker">3</span>
      <button className="currentPeriod">+</button>
      <div className="months">
        <p>Mar</p>
        <p>Apr</p>
        <p>May</p>
        <p>jun</p>
        <p>Jul</p>
        <p>Aug</p>
      </div>
    </div>
  </div>
);

export default ChallengeWidget;
