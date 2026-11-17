import React from "react";
import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";
import "./Sections.css";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <Reveal>
        <p className="section-kicker">02 / TOOLKIT</p>
        <h2 className="section-title">
          Tools I work <span>with.</span>
        </h2>
        <p className="section-copy">
          A snapshot of the technologies and fundamentals I've been learning and
          using in projects.
        </p>
      </Reveal>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.08}>
            <article className="skill-card">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.group}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="skills-note">
        Skill levels vary by technology. This list reflects tools and topics
        I've studied or used; project details show where I've applied them.
      </p>
    </section>
  );
}
