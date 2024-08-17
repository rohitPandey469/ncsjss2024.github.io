import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import styles from './ClubCard.module.css'
import designImg from "./assets/design.svg"
import webImg from "./assets/web.svg"
import techImg from "./assets/tech.svg"
import programImg from "./assets/program.svg"
export default function ClubCard({name, desc, imgSrc}){

    // fading cards animation
    const cardRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        gsap.fromTo(
            cardRef.current,
            {
                opacity : 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                scrollTrigger : {
                    trigger: cardRef.current,
                    start: "top 80%",
                    end: "top 10%",
                    toggleActions : "restart reverse restart reverse",
                    scrub: true
                },
            }
        )
        });
        return () => ctx.revert();
    }, [])

    return(
        <section className={styles.section} ref={cardRef}>
            <div className={styles.innerContainer}>
                <img src={
                    imgSrc === "designImg" ? 
                    designImg : (imgSrc === "webImg" ? 
                    webImg : (imgSrc === "techImg" ?
                    techImg : programImg))
                } alt='Design Club'></img>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </section>
    )
}