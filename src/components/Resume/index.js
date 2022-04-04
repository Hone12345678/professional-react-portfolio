import React from 'react';
import myResume from "../../assets/Resume.jpg";


function Resume() {
  return (
    <section className="my-5" >
    <h1 id="about">Resume</h1>
    <div className="my-2">
    <a href='' download>Click to download</a>
    <a href="https://www.linkedin.com/in/owen-haugen/">
    <img src={myResume} className="my-2" style={{ width: "60%" }} alt="aboutSection" />
    </a>
    </div>
  </section>
  );
}

export default Resume;