import React from 'react';

import ErrorIamge from "../assets/svg/error-image.svg";
import { Link } from "react-router-dom";
import "../css/NoMatch.css";

export const NoMatch = () => {

    return (
      <div className="error-container">
        <img
          src={ErrorIamge}
          alt=""
        />
        <h1 className="error-title">
          Seite nicht gefunden
        </h1>
        <Link to="/">
          <button className="error-button">
            Home
          </button>
        </Link>
      </div>
    );
  };