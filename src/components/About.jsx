import React from "react";
import Reveal from "./Reveal.jsx";
import "./Sections.css";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <Reveal>
        <p className="section-kicker">01 / ABOUT ME</p>
        <h2 className="section-title">
          A little about <span>me.</span>
        </h2>
      </Reveal>
      <div className="about-grid">
        <Reveal>
          <p className="section-copy about-lead">
            I'm Suryansh Dwivedi, a Full Stack Developer interested in building
            useful, reliable, and well-crafted web applications.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="about-details">
            <p className="section-copy">
              I work across frontend and backend development, turning ideas into
              web experiences with React, Node.js, Express, and MongoDB. I also
              enjoy strengthening my problem-solving skills through Data
              Structures and Algorithms.
            </p>
            <p className="section-copy">
              I'm currently pursuing my learning journey in software engineering
              and continuously improving my fundamentals through projects,
              practice, and experimentation.
            </p>
            <a className="accent-link" href="#projects">
              Explore my work ↗
            </a>
          </div>
        </Reveal>
      </div>
      <div className="about-stats">
        <div>
          <strong>03</strong>
          <span>FEATURED PROJECTS</span>
        </div>
        <div>
          <strong>MERN</strong>
          <span>FULL STACK FOCUS</span>
        </div>
        <div>
          <strong>2028</strong>
          <span>GRADUATION TARGET</span>
        </div>
      </div>
    </section>
  );
}
