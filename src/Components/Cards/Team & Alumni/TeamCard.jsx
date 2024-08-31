import styles from "../Team & Alumni/card.module.css";
import PropTypes from "prop-types";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

export default function TeamCard(props) {
        return(
            <div className={styles.flipcard}>
                <div className={styles.flipcardinner}>

                    {/* flip card front */}
                    <div className={styles.flipcardfront}>
                        <div className={styles.cardimg}>
                            <img 
                                src={`${window.location.origin}/ncsjss2024.github.io/team/${props.category}/${props.name.split(" ")[0]}.jpg`} 
                                alt={props.name}
                            />
                        </div>
                        <h3>{props.name}</h3>
                        <p>{props.role}</p>
                    </div>

                    {/* flip card back */}
                    <div className={styles.flipcardback}>
                        <div className={styles.card2img}>
                            <img 
                                src={`${window.location.origin}/ncsjss2024.github.io/team/${props.category}/${props.name.split(" ")[0]}.jpg`} 
                                alt={props.name}
                            />
                        </div>
                        <h3>{props.role}</h3>
                        
                        <p className={styles.avTcon}>Available to contact</p>
                        <span className={styles.socialCont}>
                            {
                                props.socials.map((social) => {
                                    const socialName = Object.keys(social)[0];
                                    return(
                                        <a key={socialName} href={social[socialName]} target='blank'>
                                            <img 
                                                className={styles.socials} 
                                                src={`${window.location.origin}/ncsjss2024.github.io/socials/${socialName}.svg`}
                                                alt="" 
                                            />
                                        </a>
                                    )
                                })
                            }
                        </span>
                    </div>


                </div>
            </div>
        )
}

TeamCard.propTypes = {
    name: PropTypes.string,
    category: PropTypes.string,
    role: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.object),
};