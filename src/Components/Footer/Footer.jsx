import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-social-links-container" id="connect">
          <a
            href="https://www.instagram.com/hackncs"
            className="footer-social-link"
            alt="https://instagram.com"
            target="blank"
          >
            <img
              src={"/ncsjss2024.github.io/socials/instagram.svg"}
              alt="https://intagram.com"
              className="footer-social-link-image"
              target="blank"
            />
          </a>
          <a
            href="https://www.facebook.com/nibblecomputersociety"
            className="footer-social-link"
            alt="https://facebook.com"
            target="blank"
          >
            <img
              src={"/ncsjss2024.github.io/socials/facebook.svg"}
              alt="https://facebook.com"
              className="footer-social-link-image"
            />
          </a>
          <a
            href="https://www.behance.net/ncs-jss"
            className="footer-social-link"
            alt="https://behance.com"
            target="blank"
          >
            <img
              src={"/ncsjss2024.github.io/socials/behance.svg"}
              alt=""
              className="footer-social-link-image"
            />
          </a>
          <a
            href="https://github.com/ncs-jss" 
            className="footer-social-link" 
            alt=""
            target="blank"
          >
            <img
              src={"/ncsjss2024.github.io/socials/github.svg"}
              alt=""
              className="footer-social-link-image"
            />
          </a>
        </div>
        {/* <div className="footer-nav-links-container">
          <NavLink className="footer-nav-link" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink
            className="footer-nav-link"
            to="/projects"
            activeClassName="active"
          >
            Projects
          </NavLink>
          <NavLink
            className="footer-nav-link"
            to="/team"
            activeClassName="active"
          >
            Team
          </NavLink>
          <NavLink
            className="footer-nav-link"
            to="/alumni"
            activeClassName="active"
          >
            Alumni
          </NavLink>
        </div> */}
        <div className="footer-content-container">
            <p className="footer-content-p1">Designing, Coding, and Developing Tomorrow&apos;s Innovations Today.</p>
            <p className="footer-content-p2">Designed and developed with <span style={{color:"red"}}>&#10084;</span> by Nibble Computer Society</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
