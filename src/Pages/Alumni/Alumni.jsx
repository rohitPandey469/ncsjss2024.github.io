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
  const strokeRef3 = useRef(null);
  const textRef3 = useRef(null);
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
      gsap.to(strokeRef3.current, {
        width: "90vw",
        duration: 0.5,
        scrollTrigger: {
          trigger: textRef3.current,
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
        {/* 2023 -------------------------------------------------- */}
        <div className={styles.partition}>
          <div className={styles.line} ref={textRef1}>
            2023
          </div>
          <div className={styles.hrline} ref={strokeRef1}></div>
          <div className={styles.underlay}></div>
        </div>
        {/* CARDS------------------------------- */}
        <div className={styles.cardcont}>
          {alumniData["2023"].map((member) => {
            return (
              <AlumniCard
                key={member.id}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                category={"2023"}
              />
            );
          })}
        </div>
        {/* 2022 -------------------------------------------------- */}
        <div className={styles.partition}>
          <div className={styles.line} ref={textRef2}>
            2022
          </div>
          <div className={styles.hrline} ref={strokeRef2}></div>
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
          <div className={styles.line} ref={textRef3}>
            2021
          </div>
          <div className={styles.hrline} ref={strokeRef3}></div>
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
                linkedin={member.socials.linkedin}
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

// persist only 3 years of alumni data

const alumniData = { 
    2021 : [
    {
      id: 1,
      name: "Devansh Chaudhary",
      socials: [
        { linkedin: "https://www.linkedin.com/in/rex12543/", }
      ]
    },
    {
      id: 2,
      name: "Devansh Gera",
      socials: [
        { linkedin: "https://www.linkedin.com/in/devansh-gera-62a2bb16b", }
      ]
    },
    {
      id: 3,
      name: "Mansi Gupta",
      socials: [
        { linkedin: "https://www.linkedin.com/in/mansi-gupta-a1195a91/", }
      ]
    },
    {
      id: 4,
      name: "Mohammad Zaid Ansari",
      socials: [
        { linkedin: "https://www.linkedin.com/in/mohammad-zaid-ansari-927305174", }
      ]
    },
    {
      id: 5,
      name: "Prajwal Shirur",
      socials: [
        { linkedin: "https://www.linkedin.com/in/prajwal-ss-054a29185/", }
      ]
    },
    {
      id: 6,
      name: "Pranav Kumar",
      socials: [
        { linkedin: "https://www.linkedin.com/in/pranavnegi77", }
      ]
    },
    {
      id: 7,
      name: "Rajat Verma",
      socials: [
        { linkedin: "https://www.linkedin.com/in/rajat2502", }
      ]
    },
    {
      id: 8,
      name: "Saksham Raghuvanshi",
      socials: [
        { linkedin: "https://www.linkedin.com/in/saksham-raghuvanshi-0a1b58170/", }
      ]
    },
    {
      id: 9,
      name: "Sharad Mehrotra",
      socials: [
        { linkedin: "https://www.linkedin.com/in/sharad2307/", }
      ]
    },
    {
      id: 10,
      name: "Viral Luke",
      socials: [
        { linkedin: "https://www.linkedin.com/in/viral-luke-0615291aa", }
      ]
    },
  ],
  2022 : [
    {
      id: 1,
      name: "Kalpit Arya",
      socials: [
        { linkedin: "https://www.linkedin.com/in/kalpit-arya/?originalSubdomain=in", }
      ]

    },
    {
      id: 2,
      name: "Ayush Kumar",
      socials: [
        { linkedin: "https://www.linkedin.com/in/ayush-kumar-10bb0b197/?originalSubdomain=in", }
      ]

    },
    {
      id: 3,
      name: "Shruti Agarwal",
      socials: [
        { linkedin: "https://www.linkedin.com/in/shruti-ag/", }
      ]

    },
    {
      id: 4,
      name: "Anurag Srivastava",
      socials: [
        { linkedin: "https://www.linkedin.com/in/singingapple/", }
      ]

    },
    {
      id: 5,
      name: "Ojuswi Rastogi",
      socials: [
        { linkedin: "https://www.linkedin.com/in/ojuswizard/", }
      ]

    },
    {
      id: 6,
      name: "Vaibhav Shukla",
      socials: [
        { linkedin: "https://www.linkedin.com/in/vaibhav-shukla-7a2a0b196", }
      ]

    },
    {
      id: 7,
      name: "Aditee Singh",
      socials: [
        { linkedin: "", }
      ]

    },
    {
      id: 8,
      name: "Naved Akhtar",
      socials: [
        { linkedin: "https://www.linkedin.com/in/naved-akhtar-54b5ab146/", }
      ]

    },
    {
      id: 9,
      name: "Mihir Sahai",
      socials: [
        { linkedin: "https://www.linkedin.com/in/mihir-sahai-964228191/", }
      ]

    },
    {
      id: 10,
      name: "Paarth Agarwal",
      socials: [
        { linkedin: "https://www.linkedin.com/in/paarth17032000", }
      ]

    },
    {
      id: 11,
      name: "Shivam Singh",
      socials: [
        { linkedin: "https://www.linkedin.com/in/shivamsingh-07", }
      ]

    },
    {
      id: 12,
      name: "Shrey Jain",
      socials: [
        { linkedin: "https://www.linkedin.com/in/shrey-jain-3587161a1/", }
      ]

    },
  ],
    2023 : [
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
    },]
  };
