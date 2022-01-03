import React from "react";

import CodepenIcon from "../../images/svg/CodepenIcon.svg";
import FccIcon from "../../images/svg/FccIcon.svg";
import GithubIcon from "../../images/svg/GithubIcon.svg";
import GlitchIcon from "../../images/svg/GlitchIcon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">J.Todd</div>

      <div className="footer-icon-group">
        <a className="footer-icon-link" href="https://github.com/jtxdd">
          <img className="footer-icon" src={GithubIcon} alt="Github logo" />
        </a>

        <a className="footer-icon-link" href="https://codepen.io/j-todd">
          <img className="footer-icon" src={CodepenIcon} alt="Codepen logo" />
        </a>

        <a className="footer-icon-link" href="https://www.freecodecamp.org/jtodd">
          <img className="footer-icon" src={FccIcon} alt="freeCodeCamp logo" />
        </a>

        <a className="footer-icon-link" href="https://glitch.com/@jtxdd">
          <img
            className="footer-icon"
            src={GlitchIcon}
            alt="Glitch logo"
            style={{ filter: "invert(100%)" }}
          />
        </a>
      </div>

      <div className="footer-legal">
        <span className="mr-1">&copy;</span>
        <span>2020</span>
      </div>
    </footer>
  );
}

export default Footer;
