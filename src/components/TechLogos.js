import React from "react";
import logoList from "../images/logos/index.js";

function TechLogos() {
  return (
    <div id="tech-skill-logos" className="mt-5">
      <h6>Tech Skills</h6>
      {logoList.map((logo) => (
        <a key={logo.title} href={logo.href} target="blank">
          <img src={logo.img} alt={logo.title} title={logo.title} className="tech-logo img-fluid" />
        </a>
      ))}
    </div>
  );
}

export default TechLogos;
