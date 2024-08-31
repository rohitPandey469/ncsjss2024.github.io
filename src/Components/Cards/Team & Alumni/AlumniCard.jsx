import styles from "../Team & Alumni/card.module.css";
import PropTypes from "prop-types";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

export default function AlumniCard(props) {
        return(
            <div className={styles.flipcard}>
                <div className={styles.flipcardinner}>

                    {/* flip card front */}
                    <div className={styles.flipcardfront}>
                        <div className={styles.cardimg}>
                        <img 
                            src={
                                props.name !== "Devansh Gera" ? 
                                `${window.location.origin}/ncsjss2024.github.io/alumni/${props.category}/${props.name.split(" ")[0]}.jpg` :
                                `${window.location.origin}/ncsjss2024.github.io/alumni/${props.category}/Devansh2.jpg`
                            } 
                            alt={props.name}
                        />
                        </div>
                        <h3>{props.name}</h3>
                    </div>

                    {/* flip card back */}
                    <div className={styles.flipcardback}>
                        <div className={styles.card2img}>
                            <img 
                                src={
                                    props.name !== "Devansh Gera" ? 
                                    `${window.location.origin}/ncsjss2024.github.io/alumni/${props.category}/${props.name.split(" ")[0]}.jpg` :
                                    `${window.location.origin}/ncsjss2024.github.io/alumni/${props.category}/Devansh2.jpg`
                                } 
                                alt={props.name}
                            />
                        </div>
                        <h3>{props.name}</h3>
                        
                        <p>Available to contact</p>
                        <span className={styles.socialCont}>
                            <a href={props.linkedin} target='blank'>
                                <img 
                                    className={styles.socials}
                                    src={`${window.location.origin}/ncsjss2024.github.io/socials/linkedin.svg`}
                                    alt=""
                                />
                            </a>
                        </span>
                    </div>


                </div>
            </div>
        )
}

AlumniCard.propTypes = {
    name: PropTypes.string,
    category: PropTypes.string,
    role: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.object),
};