import { useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import styles from "./Home.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ClubCard from "../../Components/Cards/HomePage/ClubCard/ClubCard";
import EventCard from "../../Components/Cards/HomePage/EventCard/EventCard";
import ParticleEffect from "../../Components/ParticleEffect/ParticleEffect";
import Slider from "../../Components/Swiper/Swiper";
import recruitImg from "/events/recruit.png";
import lootImg from "/projects/loot.png";
import trekImg from "/events/register.png";
import dateImg from "/events/datereveal.png";
// import Post from "../../Components/Instagram/Post";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // front text fading animation on page load
  const textRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".animate", {
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  // arrow stroke line extend enimation on scroll
  const strokeRef = useRef(null);
  const clubsRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(strokeRef.current, {
        width: "90vw",
        duration: 0.5,
        scrollTrigger: {
          trigger: strokeRef.current,
          toggleActions: "restart none reverse none",
          start: "top 70%",
          end: "top 70%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <ParticleEffect />
      <Header />

      <main>
        <div
          className={styles.quoteSection}
          style={{ backgroundImage: `url('./home-background.svg')` }}
        >
          <img className={styles.lightRays} src="./light-rays2.svg"></img>
          <div className={styles.quoteText} ref={textRef}>
            <h1 className={`${styles.community} animate`}>
              Building Community
            </h1>
            <h1 className={`${styles.quote} animate`}>
              <span className={styles.turning}>Turning</span> college into a
              collaborative work experience.
            </h1>
          </div>
          <div className={styles.arrowStroke} ref={strokeRef}></div>
          <a href="#clubs">
            <div className={styles.downArrow}>
              <img src="./arrow-down.svg" alt="down arrow" />
            </div>
          </a>
        </div>

        <article
          className={`${styles.clubsSection} ${styles.article}`}
          ref={clubsRef}
        >
          <h2 className={styles.h2}>OUR CLUBS</h2>
          <p className={styles.p} id="clubs">
            Explore our specialized clubs: Web Development, Programming, Design,
            and Technical. Dive into web creation, design aesthetics, and
            technical innovation with us! Join our vibrant community and unleash
            your coding potential!
          </p>

          <div className={styles.clubsCardsContainer}>
            <ClubCard
              name="Programming Club"
              desc="Unlocking possibilities - where errors are erased by the logic , and lines of code weave the tapestry of innovation in the digital landscape."
              imgSrc="programImg"
            />

            <ClubCard
              name="Development Club"
              desc="The club is a dynamic space where innovation thrives, turning lines of code into powerful solutions and bringing ideas to digital life."
              imgSrc="webImg"
            />

            <ClubCard
              name="Design Club"
              desc="A vibrant hub where creativity takes flight, transforming ideas into visually stunning realities."
              imgSrc="designImg"
            />

            <ClubCard
              name="Technical Club"
              desc="We pioneer the digital frontier , commanding code, excelling in AI/ML, and thriving on open source, all fueled by curiosity and innovation."
              imgSrc="techImg"
            />
          </div>
        </article>

        <article className={`${styles.article} ${styles.highlightsSection}`}>
          <h2 className={styles.h2}>HIGHLIGHTS</h2>
          <p className={styles.p}>
            Dive into these snapshots showcasing our dynamic events, workshops,
            and the incredible journey of our members. Explore the visual story
            of our society&apos;s energy, passion, and technological prowess in
            these engaging highlights!
          </p>
          <Slider />
        </article>
        {/* <Post /> */}

        <article className={`${styles.eventsSection} ${styles.article}`}>
          <h2 className={styles.h2}>EVENTS</h2>
          <p className={styles.p}>
            Join us as we explore the latest trends, share insights, and create
            memorable experiences together. Get ready to be inspired and
            empowered at our dynamic events!
          </p>

          <div className={styles.eventsCardsContainer}>
            <EventCard
              name="Zealicon Events"
              link="https://www.instagram.com/hackncs"
              img1={lootImg}
              img2={trekImg}
            />

            <EventCard
              name="Past Events"
              link="https://www.instagram.com/hackncs"
              img1={dateImg}
              img2={recruitImg}
            />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Home;
