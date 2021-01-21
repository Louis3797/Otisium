import React from "react";
import { CgCopyright } from "react-icons/cg";
import "../css/Footer.css";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-creator-div">
          <CgCopyright className="footer-icon" />
          <p className="footer-text">2021, by Louis-Kaan Ay</p>
        </div>
        <Link to="/imprint" className="footer-link">
          Impressum
        </Link>
        <Link to="/privacy" className="footer-link">
          Datenschutz
        </Link>
        <Link to="/contact" className="footer-link">
          Kontakt
        </Link>
      </div>
    </footer>
  );
};
