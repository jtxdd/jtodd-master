import React from "react";

import Headshot from "./Headshot.js";
import TechLogos from "./TechLogos.js";

const items = [
  //"I am an upcoming full-stack developer.",
  "I enjoy developing solutions for challenging problems, big or small.",
  "I have developed information systems from conception up to production.",
  "I am a knowledge seeker and recently completed the freeCodeCamp curriculum.",
  "I earned a business degreee in information systems at the University of North Georgia.",
  "My first programming language was Q-Basic, then Pascal, then CSS and HTML, then C#, javascript, and lastly (briefly) MATLAB.",
  "While earning my CIS degree a passion emerged for application development.",
  "I have been consuming all things regarding app development and implementing my learnings in numerous web applications.",
];

function About(props) {
  return (
    <section id="About" className="module" ref={props.about}>
      <Headshot />
      <h3>About</h3>
      <div className="module-content">
        {items.map((text, idx) => (
          <div key={"text" + idx}>{text}</div>
        ))}
        <TechLogos />
      </div>
    </section>
  );
}

export default About;
