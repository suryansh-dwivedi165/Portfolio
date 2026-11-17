import React, { useState } from "react";
import "./Navbar.css";

const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>SD<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Let's talk <span>↗</span></a>
      </nav>
    </header>
  );
}
