import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";
import img1L from "./assets/R1.png";
import img2L from "./assets/R2.png";
import viewVector from "./assets/Vector.svg";

export default function EventCard({ name="Zealicon events", link="/", img1=img1L,img2=img2L }) {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img1} alt="" src={img1} />
        <img className={styles.img2} alt="" src={img2} />
        <div className={styles.imgBlur1} />
        <div className={styles.imgBlur2} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.eventNameText}>{name}</div>
          <a href={link} className={styles.viewContainer} target="blank">
            <div className={styles.text}>{`View `}</div>
            <img className={styles.viewVectorImg} alt="" src={viewVector} />
          </a>
        </div>
      </div>
    </section>
  );
}
