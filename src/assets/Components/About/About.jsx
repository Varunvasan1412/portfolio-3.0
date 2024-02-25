import React from "react";
import "./TheAbout.css";

const About = () => {
  return (
    <>
      <div className="page-2" id="page-2">
        <h1 className="abt-me">ABOUT ME</h1>
        <div className="my-photo">
          <img src="photos/img1" alt="" />
        </div>
        <div id="about-section">
          <p>
            Empowering all-scale projects with custom web experiences that are
            <span>memorable</span> and <span>profitable</span> . With a passion
            for design and development, I take projects from ideation to launch,
            ensuring a seamless journey that leaves a lasting impact in the
            digital landscape.
          </p>
        </div>
        <div className="skills">
          <p>WHAT I DO</p>
          <h1>3D</h1>
          <h1>VISUAL</h1>
          <h1>MOTION</h1>
          <h1>PRODUCT</h1>
          <h1>TUTORIAL</h1>
        </div>
        <div id="scroller">
          <div className="scroll">
            <h4>Passionate</h4>
            <h4>Agile</h4>
            <h4>Design-Minded</h4>
            <h4>Innovative</h4>
            <h4>Humble</h4>
          </div>
          <div className="scroll">
            <h4>Passionate</h4>
            <h4>Agile</h4>
            <h4>Design-Minded</h4>
            <h4>Innovative</h4>
            <h4>Humble</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
