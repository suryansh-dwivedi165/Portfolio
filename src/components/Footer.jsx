import React from "react";
import "./Sections.css";

export default function Footer() {
  return <footer className="site-footer"><a className="footer-brand" href="#home">SD<span>.</span></a><p>Designed & built by Suryansh Dwivedi.</p><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()}</span></footer>;
}
