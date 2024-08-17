import React, { useState, useRef } from "react";
import styles from "./LatestPost.module.css";
import { Link } from "react-router-dom";
import heart from "./assets/heart.png";
import comment from "./assets/comment.png";
import sent from "./assets/sent.svg";
import img from "./DEFAULT.png";

const LatestPost = ({ post }) => {
  const {
    media_type,
    media_url,
    permalink,
    caption,
    likes_count = 10000,
    comments_count = 145,
  } = post;

  // video
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.containerWrap}>
      <div className={styles.container}>
        <div className={styles.mediaContainer}>
          {media_type === "IMAGE" && (
            <img className={styles.media} alt="Your Media" src={img} />
          )}
          {media_type === "VIDEO" && (
            <>
              <video
                ref={videoRef}
                className={styles.media}
              >
                <source src={media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className={`${styles.playPauseButton} ${
                  isPlaying ? styles.playing : ""
                }`}
                onClick={togglePlayPause}
              ></div>
            </>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.social}>
            <div>
              <Link to={permalink}>
                <img src={heart} alt="like" className={styles.icons} />
              </Link>
            </div>
            <div>
              <Link to={permalink}>
                <img src={comment} alt="comment" className={styles.icons} />
              </Link>
            </div>
            <div>
              <Link to={permalink}>
                <img src={sent} alt="send" className={styles.icons} />
              </Link>
            </div>
          </div>
          <Link to={permalink}>
            <div className={styles.caption}>{caption}</div>
          </Link>
          <div className={styles.linkContainer}>
            <Link to={permalink} className={styles.link}>
              {" "}
              View on Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
