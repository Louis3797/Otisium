import React, { useEffect } from "react";
import "../css/Trainer.css";
import MertTrainerImage from "../assets/images/mert-trainer-image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const Trainer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="trainer-container">
      <div data-aos="fade-up" className="trainer-profile-container">
        <div className="trainer-text-container">
          <h2 className="trainer-name">Mert Yilmaz</h2>
          <p className="trainer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img src={MertTrainerImage} alt="" />
      </div>
    </div>
  );
};
