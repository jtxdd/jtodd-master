import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import prjx from "./pjList.js";

const chunk = (array, size) => {
  const chunked_arr = [];
  let index = 0;

  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }

  return chunked_arr;
};

function ProjectCard(props) {
  return (
    <div className="pj-card card">
      <LazyLoadImage
        alt={props.title}
        className="card-img-top border-bottom"
        src={props.img}
        effect="blur"
      />
      <div className="card-body">
        <h5>{props.title}</h5>
        <p className="card-text">
          {typeof props.desc === "string" ? (
            props.desc
          ) : (
            <span>
              <span>{props.desc.textBefore}</span>
              <a href={props.desc.link} target="blank">
                {props.desc.linkText}
              </a>
              <span>{props.desc.textAfter}</span>
            </span>
          )}
        </p>
        <div className="card-links">
          <a href={props.link.toFinal} target="blank">
            Open
          </a>

          <a href={props.link.toDetails} onClick={(e) => props.toggleModal(e, props.userStories)}>
            User Stories
          </a>
        </div>
      </div>
    </div>
  );
}

function CardRow(props) {
  return (
    <div className="row">
      {props.cols.map((pj, i) => (
        <div key={"col" + i} className="col-lg-6 pj-col">
          <ProjectCard {...pj} toggleModal={props.toggleModal} />
        </div>
      ))}
    </div>
  );
}

function Projects(props) {
  const rows = chunk(prjx, 2);
  return (
    <section id="Projects" className="module" ref={props.projects}>
      <h3>Projects</h3>
      <div className="module-content">
        {rows.map((row, i) => (
          <LazyLoadComponent key={"row" + i}>
            <CardRow cols={row} toggleModal={props.toggleModal} />
          </LazyLoadComponent>
        ))}
      </div>
    </section>
  );
}

/*
  <section id="Projects" className="module" ref={props.projects}>
      <h3>Projects</h3>
      <div className="module-content">
        {rows.map((row, i) => (
          <CardRow key={"row" + i} cols={row} num={chunkNum} />
        ))}
      </div>
    </section>
*/

export default Projects;
