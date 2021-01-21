import React from "react";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../css/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title-div">
        <p className="contact-title">Noch Fragen?</p>
        <div className="contact-seperator" />
        <p className="contact-suptitle">Dann kontaktieren sie uns doch</p>
      </div>

      <div className="contact-info-container">
        <div className="contact-info-div">
          <div className="contact-info-box">
            <MdLocalPhone className="contact-icon" />
            <p className="contact-text">+49 9495940</p>
          </div>
          <div className="contact-info-box">
            <MdEmail className="contact-icon" />
            <p className="contact-text">test@otisium.de</p>
          </div>
          <div className="contact-info-box">
            <FaMapMarkerAlt className="contact-icon" />
            <p className="contact-text-title">Adresse:</p>
          </div>
          <p className="contact-approach-text">32257 Bünde</p>
          <p className="contact-approach-text">Am Kreuzstein 4</p>
          <p className="contact-approach-text">32257 Bünde</p>
        </div>
        <div className="contact-info-div">
          <p className="contact-approach-title">Anfahrt:</p>
          <a href="https://www.google.de/maps/place/Am+Kreuzstein+4,+32257+B%C3%BCnde/@52.2063571,8.558875,79m/data=!3m1!1e3!4m5!3m4!1s0x47ba100eb2d7a99b:0xced8b62000505841!8m2!3d52.20638!4d8.55898">
            <button className="contact-button">Zu Google Maps</button>
          </a>
        </div>
      </div>
    </div>
  );
};
