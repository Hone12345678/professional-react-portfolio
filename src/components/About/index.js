import React from 'react';
import meImage from "../../assets/aboutSection/meImage.jpg";

function About() {
  return (
    <section className="my-5">
    <h1 id="about">Who am I?</h1>
    <p>
      A resourceful GIS professional with a background in conservation biology and now Development! Skilled in ArcGIS, Pro, JavaScript, Express, Node, SQL, Mongo, React QGIS, Terrset, and global positioning systems.
    </p>
    <img src={meImage} className="my-2" style={{ width: "10%" }} alt="aboutSection" />
  </section>
  );
}

export default About;