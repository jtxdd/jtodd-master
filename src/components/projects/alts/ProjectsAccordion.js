import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

/*


    - why ref and scroll not working?


*/

// chunk divides list into rows with number (*size*) of columns
const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

// card containing preview info for a project
function PjCard(props) {
  const { title, text, tech, img } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {tech.map((logo, idx) => (
          <div key={"logo" + idx}>{logo}</div>
        ))}
      </Card.Footer>
    </Card>
  );
}

class ProjectsAccordion extends Component {
  constructor(props) {
    super(props);
    this.frontEnd = React.createRef();
    this.backEnd = React.createRef();
    this.fullStack = React.createRef();

    this.state = { activeKey: "" };

    this.toggleGroup = this.toggleGroup.bind(this);
  }

  toggleGroup(activeKey) {
    this.setState({ activeKey });

    /*
    const ref = this[activeKey];
    if (ref) {
      ref.current.scrollTo(0, ref.current.offsetHeight);
      console.log(ref);
    }
    */
  }

  render() {
    const {
      groups: { front, back, full }
    } = this.props;
    const { activeKey } = this.state;
    return (
      <Accordion activeKey={activeKey} onSelect={this.toggleGroup}>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="frontEnd"
            className={activeKey === "frontEnd" ? "active-group" : ""}
          >
            <span className="mr-1 icon chevron" />
            <span>Front-End</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="frontEnd">
            <Card.Body id="front-end-group" ref={this.frontEnd}>
              {front.length > 0 &&
                chunk(front, 2).map((row, idx) => (
                  <div key={"frontrow" + idx} className="row">
                    {row.map((pj, i) => (
                      <div key={pj.title + i + idx} className="col-md-6 pj-card mb-5">
                        <PjCard {...pj} />
                      </div>
                    ))}
                  </div>
                ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="backEnd"
            className={activeKey === "backEnd" ? "active-group" : ""}
          >
            <span className="mr-1 icon chevron" />
            <span>Back-End</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="backEnd">
            <Card.Body id="back-end-group" ref={this.backEnd}>
              {back.length > 0 &&
                chunk(back, 2).map((row, idx) => (
                  <div key={"backrow" + idx} className="row">
                    {row.map((pj, i) => (
                      <div key={pj.title + i + idx} className="col-md-6 pj-card mb-5">
                        <PjCard {...pj} />
                      </div>
                    ))}
                  </div>
                ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="fullStack"
            className={activeKey === "fullStack" ? "active-group" : ""}
          >
            <span className="mr-1 icon chevron" />
            <span>Full-Stack</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="fullStack">
            <Card.Body id="full-stack-group" ref={this.fullStack}>
              {full.length > 0 &&
                chunk(full, 2).map((row, idx) => (
                  <div key={"fullrow" + idx} className="row">
                    {row.map((pj, i) => (
                      <div key={pj.title + i + idx} className="col-md-6 pj-card mb-5">
                        <PjCard {...pj} />
                      </div>
                    ))}
                  </div>
                ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default ProjectsAccordion;
