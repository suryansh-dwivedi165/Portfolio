import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

export default function Hero() {
  const root = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-kicker", { y: 18, opacity: 0, duration: .65 })
        .from(".hero-title-line", { yPercent: 110, opacity: 0, duration: .9, stagger: .13 }, "-=.25")
        .from(".hero-role, .hero-description", { y: 20, opacity: 0, duration: .65, stagger: .12 }, "-=.35")
        .from(".hero-actions a", { y: 16, opacity: 0, duration: .5, stagger: .1 }, "-=.3")
        .from(".hero-art", { scale: .78, opacity: 0, duration: 1 }, "-=.7");
      gsap.to(".hero-orbit", { rotation: 360, duration: 28, repeat: -1, ease: "none" });
      gsap.to(".hero-code", { y: -13, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-glow", { scale: 1.18, opacity: .7, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={root}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker"><span className="status-dot" /> FULL STACK DEVELOPER</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Hi, I'm</span>
            <span className="hero-title-line hero-name">Suryansh</span>
            <span className="hero-title-line">Dwivedi<span className="blue">.</span></span>
          </h1>
          <p className="hero-role">BUILDING <span>SCALABLE WEB EXPERIENCES</span></p>
          <p className="hero-description">I build modern web applications with thoughtful interfaces, reliable backends, and a focus on solving real problems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <span>↗</span></a>
            <a className="button button-outline" href="#contact">Let's connect</a>
          </div>
          <div className="hero-tech"><span>REACT</span><i /><span>NODE.JS</span><i /><span>MONGODB</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-glow" />
          <div className="art-ring ring-a" /><div className="art-ring ring-b" />
          <div className="hero-orbit"><b /></div>
          <div className="code-card"><span className="hero-code">&lt;/&gt;</span></div>
          <p className="art-note">DESIGN MINDFULLY<br />BUILD RELIABLY</p>
        </div>
      </div>
      <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
      <span className="hero-counter">01 <i>/ 06</i></span>
    </section>
  );
}
