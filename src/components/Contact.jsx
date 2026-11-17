import React from "react";
import Reveal from "./Reveal.jsx";
import "./Sections.css";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <Reveal>
        <p className="section-kicker">05 / GET IN TOUCH</p>
        <h2 className="section-title">
          Have an idea? Let's <span>talk.</span>
        </h2>
        <p className="section-copy">
          I'm interested in learning, building, and connecting with people
          working on meaningful products. Reach out using the links below.
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="contact-panel">
          <div>
            <span className="contact-label">EMAIL</span>
            <a href="mailto:suryanshdwivedi39@gmail.com">
              suryanshdwivedi39@gmail.com
            </a>
          </div>
          <div className="contact-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
