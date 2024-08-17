// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EventManager.module.css";
import defaultImage from "./assets/zealicon.png";
import frame from "./assets/frame.svg";
import gitFrame from "./assets/gitFrame.png";

function EventManagerCard({
  project: {
    name = "Event Manager",
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img = defaultImage,
    projectLink = "",
    gitLink = "",
    technologies = ["Python", "SQL", "Django"],
  },
}) {
  const getImageUrl = (img) => `/projects/${img}`;
  return (
    <div
      className={`${styles.eventManagerContainer}
      }`}
    >
      <div className={styles.eventManagerImageContainer}>
        <img
          className={styles.eventManagerImage}
          alt={name}
          src={getImageUrl(img)}
          // src={defaultImage}
        />
      </div>
      <div className={styles.eventManagerContentContainer}>
        <div className={styles.eventManagerContentWrapper}>
          <div className={styles.eventManagerContentHeaderWrapper}>
            <div className={styles.eventManagerContentName}>{name}</div>
            <div className={styles.eventManagerContentTechContainer}>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={styles.eventManagerContentTechWrapper}
                >
                  <div className={styles.eventManagerContentTech}>{tech}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.eventManagerContentDescription}>{desc}</div>
        </div>
        <div className={styles.eventManagerContentLinksContainer}>
          <a
            href={projectLink} 
            className={styles.eventManagerContentLinkWrapper}
            target="blank"
          >
            <img
              className={styles.eventManagerContentLinkImageView}
              alt=""
              src={frame}
            />
            <div className={styles.eventManagerContentLink}>View Project</div>
          </a>
          {/* <a
            href={gitLink}
            target="blank"
            className={styles.eventManagerContentLinkWrapperGit}
          >
            <img
              className={styles.eventManagerContentLinkImageGit}
              alt=""
              src={gitFrame}
            />
            <div className={styles.eventManagerContentLink}>Go To Github</div>
          </a> */}
        </div>
      </div>
    </div>
  );
}

EventManagerCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    desc: PropTypes.string,
    projectLink: PropTypes.string,
    gitLink: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default EventManagerCard;
