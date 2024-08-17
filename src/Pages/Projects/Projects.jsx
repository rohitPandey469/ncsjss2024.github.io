import styles from "./Projects.module.css";
import EventManagerCard from "../../Components/Cards/ProjectPage/EventManagerCard";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import Footer from "../../Components/Footer/Footer";
// import React from "react";
import gsap from "gsap";
import python from "./assets/python.svg";
import react from "./assets/react.svg";
import mysql from "./assets/mysql.svg";
import html from "./assets/html.svg";
import django from "./assets/django.svg";
import triangle from "./assets/triangle.svg";
import r1 from "./assets/r1.svg";
import r2 from "./assets/r2.svg";
import r3 from "./assets/r3.svg";
import Header from "../../Components/Header/Header";
import projectData from "../../data/projects.json";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  // front text fading animation on page load
  const textRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        duration: 0.7,
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleAnimationEnd = () => {
    // console.log("Longer animation ended");
  };

  const [isZTabOpen, setIsZTabOpen] = useState(false);
  const [shouldFadeIn, setShouldFadeIn] = useState(true);
  const data = isZTabOpen
    ? projectData.zealiconProjects
    : projectData.collegeProjects;
  useEffect(() => {
    setShouldFadeIn(true);

    // Set shouldFadeIn to false after the fade-in animation is complete
    const timeoutId = setTimeout(() => {
      setShouldFadeIn(false);
    }, 2000); // Adjust the timeout to match the duration of your fadeInAnimation

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [isZTabOpen]);

  return (
    <>
      <Header activePage={"projects"} />
      <section className={styles.projectTechContainer} ref={textRef}>
        <div className={styles.projectContent}>
          <h2 className={styles.header}>PROJECTS</h2>
          <p className={styles.content}>
            We work towards a tech-smart ecosystem by organising events,
            creating experiences for college students & faculties. We build
            projects that help them find information/notices, learn
            problem-solving and engage with college culture.
          </p>
        </div>
        <div className={styles.projectTechs}>
          <div className={styles.techContainer}>
            <div className={styles.layer1}>
              <img className={styles.images} src={django} alt="" />
            </div>
            <div className={styles.layer2}>
              <img className={styles.images} src={python} alt="" />
              <img className={styles.images} src={html} alt="" />
            </div>
            <div className={styles.layer3}>
              <img className={styles.images} src={react} alt="" />
              <img className={styles.images} src={mysql} alt="" />
            </div>
          </div>
          <div className={styles.ringContainer}>
            <img
              src={r1}
              className={`${styles.Ring1} ${
                isHovered ? styles.Ring1Hovered : ""
              }`}
            />
            <img src={r2} className={styles.Ring2} />
            <img src={r3} className={styles.Ring3} />
            <img
              className={`${styles.triangle} ${
                isHovered ? styles.triangleFlicker : ""
              } ${isHovered ? styles.triangleHovered : ""}`}
              src={triangle}
              alt=""
              onMouseEnter={handleHover}
              onAnimationEnd={handleAnimationEnd}
            />
          </div>
        </div>
      </section>
      <section className={styles.projectsContainer}>
        <div className={styles.switchTab}>
          <button
            onClick={() => setIsZTabOpen(false)}
            className={!isZTabOpen ? styles.upBtn : styles.downBtnC}
          >
            <div>College Projects</div>
          </button>
          <button
            onClick={() => setIsZTabOpen(true)}
            className={!isZTabOpen ? styles.downBtn : styles.upBtnZ}
          >
            <div>Zealicon Projects</div>
          </button>
        </div>
        <div
          className={`${styles.eventManagerContainer} ${
            shouldFadeIn ? styles.fadeIn : ""
          }`}
        >
          {data.map((project, idx) => (
            <EventManagerCard
              key={idx}
              value={isZTabOpen.toString()}
              project={project}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
