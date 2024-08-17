import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./Alumni.module.css";
import AlumniCard from "../../Components/Cards/Team & Alumni/AlumniCard";
export default function Team() {
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

  // arrow stroke line extend enimation on scroll
  const strokeRef1 = useRef(null);
  const textRef1 = useRef(null);
  const strokeRef2 = useRef(null);
  const textRef2 = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(strokeRef1.current, {
        width: "90vw",
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef1.current,
          toggleActions: "restart none reverse none",
          start: "center 70%",
          end: "center 70%",
        },
      });
      gsap.to(strokeRef2.current, {
        width: "90vw",
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef2.current,
          toggleActions: "restart none reverse none",
          start: "center 70%",
          end: "center 70%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header activePage={"alumni"}></Header>

      <main className={styles.main}>
        <div className={styles.teamContent} ref={textRef}>
          <h2 className={styles.header}>ALUMNI</h2>
          <p className={styles.content}>
            Since 2000, our society has been tirelessly working to elevate
            knowledge in the field of computer science, enriching our college
            community with exceptional talents. Our relentless pursuit of
            excellence in all facets of technology is a testament to our
            commitment. Here, we proudly introduce some of our esteemed alumni
            from years past.
          </p>
        </div>
        <div className={styles.partition}>
          <div className={styles.line} ref={textRef1}>
            2022
          </div>
          <div className={styles.hrline} ref={strokeRef1}></div>
          <div className={styles.underlay}></div>
        </div>
        {/* CARDS------------------------------- */}
        <div className={styles.cardcont}>
          {alumniData["2022"].map((member) => {
            return (
              <AlumniCard
                key={member.id}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                category={"2022"}
              />
            );
          })}
        </div>
        {/* 2021 -------------------------------------------------- */}
        <div className={styles.partition}>
          <div className={styles.line} ref={textRef2}>
            2021
          </div>
          <div className={styles.hrline} ref={strokeRef2}></div>
          <div className={styles.underlay}></div>
        </div>
        {/* CARDS------------------------------- */}
        <div className={styles.cardcont}>
          {alumniData["2021"].map((member) => {
            return (
              <AlumniCard
                key={member.id}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                category={"2021"}
              />
            );
          })}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

const alumniData = {
  2021: [
    {
      id: 1,
      name: "Devansh Chaudhary",
      linkedin: "https://www.linkedin.com/in/rex12543/",
    },
    {
      id: 2,
      name: "Devansh Gera",
      linkedin: "https://www.linkedin.com/in/devansh-gera-62a2bb16b",
    },
    {
      id: 3,
      name: "Mansi Gupta",
      linkedin: "https://www.linkedin.com/in/mansi-gupta-a1195a91/",
    },
    {
      id: 4,
      name: "Mohammad Zaid Ansari",
      linkedin: "https://www.linkedin.com/in/mohammad-zaid-ansari-927305174",
    },
    {
      id: 5,
      name: "Prajwal Shirur",
      linkedin: "https://www.linkedin.com/in/prajwal-ss-054a29185/",
    },
    {
      id: 6,
      name: "Pranav Kumar",
      linkedin: "https://www.linkedin.com/in/pranavnegi77",
    },
    {
      id: 7,
      name: "Rajat Verma",
      linkedin: "https://www.linkedin.com/in/rajat2502",
    },
    {
      id: 8,
      name: "Saksham Raghuvanshi",
      linkedin: "https://www.linkedin.com/in/saksham-raghuvanshi-0a1b58170/",
    },
    {
      id: 9,
      name: "Sharad Mehrotra",
      linkedin: "https://www.linkedin.com/in/sharad2307/",
    },
    {
      id: 10,
      name: "Viral Luke",
      linkedin: "https://www.linkedin.com/in/viral-luke-0615291aa",
    },
  ],

  2022: [
    {
      id: 1,
      name: "Kalpit Arya",
      linkedin: "https://www.linkedin.com/in/kalpit-arya/?originalSubdomain=in",
    },
    {
      id: 2,
      name: "Ayush Kumar",
      linkedin:
        "https://www.linkedin.com/in/ayush-kumar-10bb0b197/?originalSubdomain=in",
    },
    {
      id: 3,
      name: "Shruti Agarwal",
      linkedin: "https://www.linkedin.com/in/shruti-ag/",
    },
    {
      id: 4,
      name: "Anurag Srivastava",
      linkedin: "https://www.linkedin.com/in/singingapple/",
    },
    {
      id: 5,
      name: "Ojuswi Rastogi",
      linkedin: "https://www.linkedin.com/in/ojuswizard/",
    },
    {
      id: 6,
      name: "Vaibhav Shukla",
      linkedin: "https://www.linkedin.com/in/vaibhav-shukla-7a2a0b196",
    },
    {
      id: 7,
      name: "Aditee Singh",
      linkedin: "Event Head",
    },
    {
      id: 8,
      name: "Naved Akhtar",
      linkedin: "https://www.linkedin.com/in/naved-akhtar-54b5ab146/",
    },
    {
      id: 9,
      name: "Mihir Sahai",
      linkedin: "https://www.linkedin.com/in/mihir-sahai-964228191/",
    },
    {
      id: 10,
      name: "Paarth Agarwal",
      linkedin: "https://www.linkedin.com/in/paarth17032000",
    },
    {
      id: 11,
      name: "Shivam Singh",
      linkedin: "https://www.linkedin.com/in/shivamsingh-07",
    },
    {
      id: 12,
      name: "Shrey Jain",
      linkedin: "https://www.linkedin.com/in/shrey-jain-3587161a1/",
    },
  ],
};
