import React from "react";

import ErrorIamge from "../assets/svg/error-image.svg";
import "../css/NoMatch.css";

export const NoMatch = () => {
  return (
    <div className="error-container">
      <img src={ErrorIamge} alt="" />
      <h1 className="error-title">Seite nicht gefunden</h1>
      <a href="/">
        <button className="error-button">Home</button>
      </a>
    </div>
  );
};
