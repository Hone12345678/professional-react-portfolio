import React from 'react';
import meImage from "../../assets/aboutSection/meImage.jpg";

function About() {
  return (
    <section className="my-5">
    <h1 id="about">Who am I?</h1>
    <p>Knowledgeable and resourceful GIS professional with a background in conservation biology. Skilled in ArcGIS, QGIS, Terrset, Adobe Creative Suite, Microsoft Office, and global positioning systems.</p>
    <img src={meImage} className="my-2" style={{ width: "20%" }} alt="aboutSection" />
  </section>
  );
}

export default About;