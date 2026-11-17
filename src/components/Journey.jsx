import React from "react";
import Reveal from "./Reveal.jsx";
import "./Sections.css";

const milestones = [
  {
    time: "CURRENT FOCUS",
    title: "Software Engineering Foundations",
    text: "Practising DSA, studying core computer science subjects, and improving technical communication.",
  },
  {
    time: "PROJECT-BASED LEARNING",
    title: "Full Stack Development",
    text: "Learning by building applications with React, Node.js, Express, MongoDB, and related tools.",
  },
  {
    time: "CONTINUOUS LEARNING",
    title: "Exploring AI & Machine Learning",
    text: "Studied introductory machine learning and explored selected deep-learning and AI concepts.",
  },
];

export default function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <Reveal>
        <p className="section-kicker">04 / THE JOURNEY</p>
        <h2 className="section-title">
          Always learning. <span>Always building.</span>
        </h2>
        <p className="section-copy">
          A brief view of what I'm focusing on as I grow as a developer.
        </p>
      </Reveal>
      <div className="timeline">
        {milestones.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1}>
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <span className="timeline-time">{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="journey-callout">
        <span>UP NEXT</span>
        <p>
          Keep sharpening problem-solving skills and build software with
          stronger engineering fundamentals.
        </p>
      </div>
    </section>
  );
}
