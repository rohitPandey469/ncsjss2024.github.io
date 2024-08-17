import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./Team.module.css";
import TeamCard from "../../Components/Cards/Team & Alumni/TeamCard";

export default function Team() {
  // front text fading animation on page load
  const textRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        duration: 0.7
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
      <Header activePage={"team"}></Header>
    
          <main className={styles.main}>
            <div className={styles.teamContent} ref={textRef}>
              <h2 className={styles.header}>TEAM</h2>
              <p className={styles.content}>
                NCS is a student group that constantly tries to innovate and
                foster technical activities on the campus. Since 2000, we have
                focused on creating meaningful experiences through immersive
                learning. We hope to bring the best in code, development, and
                design to the college scene.
              </p>
            </div>
            <div className={styles.partition}>
              <div className={styles.line} ref={textRef1}>
                4th Years
              </div>
              <div className={styles.hrline} ref={strokeRef1}></div>
              <div className={styles.underlay}></div>
            </div>
            {/* CARDS------------------------------- */}
            <div className={styles.cardcont}>
              {teamData["4_year"].map((member) => {
                return (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    socials={member.socials}
                    category={"4_year"}
                  />
                );
              })}
            </div>
            {/* 3rd year -------------------------------------------------- */}
            <div className={styles.partition}>
              <div className={styles.line} ref={textRef2}>
                3rd Years
              </div>
              <div className={styles.hrline} ref={strokeRef2}></div>
              <div className={styles.underlay}></div>
            </div>
            {/* CARDS------------------------------- */}
            <div className={styles.cardcont}>
              {teamData["3_year"].map((member) => {
                return (
                  <TeamCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    socials={member.socials}
                    category={"3_year"}
                  />
                );
              })}
            </div>
          </main>
          <Footer></Footer>
        </>
      )}
const teamData = {
  "4_year": [
    {
      id: 1,
      name: "Anadee",
      role: "Chief Executive Member",
      socials: [
        { linkedin: "https://www.linkedin.com/in/anadee11/" },
        { github: "https://github.com/Anadee11" },
        { x: "https://twitter.com/Anadee11_?s=08" },
      ],
    },
    {
      id: 2,
      name: "Anant Mishra",
      role: "CTC and HOC Web",
      socials: [
        { linkedin: "https://www.linkedin.com/in/anant-mishra-4220231bb/" },
        { github: "https://github.com/Anant7393" },
        { x: "https://twitter.com/AnantMi_" },
      ],
    },
    {
      id: 3,
      name: "Jayati Dixit",
      role: "General Secretary",
      socials: [
        { linkedin: "https://www.linkedin.com/in/jayati-dixit-931a98203/" },
        { github: "https://github.com/Jayati15" },
        { x: "https://twitter.com/Evren_1502" },
      ],
    },
    {
      id: 4,
      name: "Dev Batra",
      role: "HOC Programming",
      socials: [
        { linkedin: "https://www.linkedin.com/in/dev-batra-784415201/" },
        { github: "https://github.com/Devv14" },
      ],
    },
    {
      id: 5,
      name: "Hiteshwaram Dubey",
      role: "Financial Head",
      socials: [
        { linkedin: "https://www.linkedin.com/in/hiteshwarm-dubey-2240b3213/" },
      ],
    },
    {
      id: 6,
      name: "Om Kumar",
      role: "HOC Design",
      socials: [
        { linkedin: "https://www.linkedin.com/in/om-kumar-707762201/" },
        { github: "https://github.com/om-1115" },
      ],
    },
    {
      id: 7,
      name: "Parth Agarwal",
      role: "Creative Head",
      socials: [
        { linkedin: "https://www.linkedin.com/in/parth-agarwal-484075201/" },
      ],
    },
    {
      id: 8,
      name: "Pavitra Lalwani",
      role: "Technical Head",
      socials: [
        { linkedin: "https://www.linkedin.com/in/pavitra-lalwani-198637201/" },
        { github: "https://github.com/pavitra-lalwani" },
      ],
    },
    {
      id: 9,
      name: "Janvi Soni",
      role: "Operations Head",
      socials: [
        { linkedin: "https://www.linkedin.com/in/janvi-soni-787404170/" },
        { github: "https://github.com/janvi-soni" },
      ],
    },
    {
      id: 10,
      name: "Aditi Sahu",
      role: "HOC Technical",
      socials: [
        { linkedin: "https://www.linkedin.com/in/aditi-sahu-3b4895216/" },
        { github: "https://github.com/Aditi9800" },
      ],
    },
  ],

  "3_year": [
    {
      id: 1,
      name: "Aayush Aryan",
      role: "Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/aayusharyan1287/" },
        { github: "https://github.com/AayushAryan007" },
      ],
    },
    {
      id: 2,
      name: "Abhishek Pandey",
      role: "Developer",
      socials: [
        { github: "https://github.com/ABHISHEK-PANDEY2" },
        { x: "https://x.com/abhishek_3188?t=4z92w8Qtp6BNHKMGHrCAcw&s=09" },
      ],
    },
    {
      id: 3,
      name: "Adarsh Bajpai",
      role: "Programmer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/adarshbaj" },
        { github: "https://github.com/AdarshBajpai67" },
      ],
    },
    {
      id: 4,
      name: "Aditi pandey",
      role: "Designer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/aditi-pandey-3a6381226/" },
        { behance: "https://www.behance.net/aditipandey7" },
      ],
    },
    {
      id: 5,
      name: "Alok Ranjan",
      role: "Android Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/alokandro/" },
        { github: "https://github.com/arpitmx" },
        { x: "http://x.com/sudoarmax" },
      ],
    },
    {
      id: 6,
      name: "Anubhav Baranwal",
      role: "Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/anubhavbaranwal" },
        { github: "https://github.com/Anubhavbaranwal" },
      ],
    },
    {
      id: 7,
      name: "Ayush Jaiswal",
      role: "Programmer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/ayush-jaiswal-061869221/" },
        { github: "https://github.com/ayushjaiz" },
        { x: "https://twitter.com/_ayush12" },
      ],
    },
    {
      id: 8,
      name: "Dhruv karnwal",
      role: "Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/dhruv-karnwal-337143235" },
        { github: "https://github.com/Dhruv1969Karnwal" },
      ],
    },
    {
      id: 9,
      name: "Harsh Mishra",
      role: "DevOps and Cloud Architect",
      socials: [
        { linkedin: "https://www.linkedin.com/in/harsh-mishra-b94096144" },
        { github: "https://github.com/harsh098" },
        { x: "http://x.com/harsh_dev8086" },
      ],
    },
    {
      id: 10,
      name: "Lalit Verma",
      role: "Developer",
      socials: [
        { github: "https://github.com/lalit6393" },
        { linkedin: "https://www.linkedin.com/in/lalit6393" },
      ],
    },
    {
      id: 11,
      name: "Neev Gaur",
      role: "Android Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/neev-gaur-832240237/" },
        { github: "https://github.com/neevgaur" },
      ],
    },
    {
      id: 12,
      name: "Raghvendra Singh",
      role: "ML Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/raghvendra-singh-053977226/" },
        { github: "https://github.com/RaST-EDITH" },
      ],
    },
    {
      id: 13,
      name: "Saumya Gupta",
      role: "Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/saumya-gupta-a3828723a/" },
        { github: "https://github.com/sam1090" },
      ],
    },
    {
      id: 14,
      name: "Shivang Yadav",
      role: "Android Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/shivang-yadav-89962b226" },
        { github: "https://github.com/Iamshivang" },
      ],
    },
    {
      id: 15,
      name: "Shreyansh Agrawal",
      role: "Programmer",
      socials: [
        {
          linkedin: "https://www.linkedin.com/in/shreyansh-agrawal-71b960227/",
        },
        { github: "https://github.com/shreyanshagr" },
      ],
    },
    {
      id: 16,
      name: "Urvashi Shukla",
      role: "Developer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/urvashi-shukla/" },
        { github: "https://github.com/urvashi1210" },
        { x: "https://twitter.com/Urvashi_0107" },
      ],
    },
    {
      id: 17,
      name: "Utsav Upadhyay",
      role: "Programmer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/utsavup" },
        { github: "https://github.com/UtsavUpadhyay08" },
      ],
    },
    {
      id: 18,
      name: "Vivek Singh",
      role: "Designer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/vivek-singh-8a9589229" },
        { behance: "https://www.behance.net/viveksingh163" },
      ],
    },
    {
      id: 19,
      name: "Yogita Singh",
      role: "Designer",
      socials: [
        { linkedin: "https://www.linkedin.com/in/yogita-singh-006a75168/" },
        { behance: "https://www.behance.net/yogitasingh9" },
      ],
    },
  ],
};
