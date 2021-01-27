import React from "react";
import "../css/About.css";

import { aboutdata } from "../data/AboutData";
import { Text1, Text2 } from "../components/Text";

export const About = () => {
  const text = aboutdata.map((t, index) => {
    if (index % 2 === 0) {
      return <Text1 title={t.title} text={t.text} img={t.img} />;
    } else {
      return <Text2 title={t.title} text={t.text} img={t.img} />;
    }
  });
  return (
    <div className="about-container">
      <div className="about-placeholder" />
      {text}
      <div className="about-placeholder" />
    </div>
  );
};
