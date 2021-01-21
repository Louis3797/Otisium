import React from "react";
//import { Link } from "react-router-dom";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
  IoIosArrowDown,
} from "react-icons/io";

import "../css/Home.css";

export const Home = () => {
  return (
    <>
      <div className="home-div-1">
        <p className="home-title">
          "Stärke wächst nicht aus körperlicher Kraft - vielmehr aus unbeugsamen
          Willen"
        </p>
        <p className="home-author">Mahatma Gandhi</p>
        <IoIosArrowDown className="home-arrowDown-icon" />
      </div>
      <div className="home-div-2">
        <div className="home-socialLogo-div">
          <a href="https://www.instagram.com/otisium/?hl=de">
            <IoLogoInstagram className="home-socialLogo-Ig" />
          </a>
          <IoLogoFacebook className="home-socialLogo-Fa" />
          <a href="https://www.youtube.com/channel/UC2dpnlIPZPmRJfhH110dpvA">
            <IoLogoYoutube className="home-socialLogo-Yt" />
          </a>
        </div>
      </div>
    </>
  );
};
