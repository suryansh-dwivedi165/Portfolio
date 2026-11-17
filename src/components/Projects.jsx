import React from "react";
import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";
import "./Sections.css";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <Reveal>
        <p className="section-kicker">03 / SELECTED WORK</p>
        <h2 className="section-title">
          Things I've <span>built.</span>
        </h2>
        <p className="section-copy">
          A few learning projects that helped me explore frontend, backend,
          databases, and API integration.
        </p>
      </Reveal>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 0.08}>
            <article className="project-card">
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="link-placeholder">Add GitHub URL</span>
                  )}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  ) : (
                    <span className="link-placeholder">Add live URL</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
