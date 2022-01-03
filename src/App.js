import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

import NavBar from "./components/ui/NavBar.js";
import Footer from "./components/ui/Footer.js";
import About from "./components/About.js";
import Projects from "./components/projects/Projects.js";
import Contact from "./components/Contact.js";
import ScrollTopBtn from "./components/ScrollTopBtn.js";

import "./App.css";

/*
  - test observer & URL: 
    * click & scroll
    * after resize
    * after breakpoint
    
  - does hash & oberserver mess up scroll restoration on like reload & stuff?

  - test contact form submission
 */

const obsOpts = {
  root: null,
  threshold: [...Array(20)].map((_, i) => ++i / 20),
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScrollBtn: false,
      midpoint: Math.round(window.document.body.offsetHeight / 2),
      activeNav: { id: null, ratio: 0 },
      showModal: false,
      frameSource: "",
      scrolling: false,
    };

    this.sections = ["spy-px", "About", "Projects", "Contact"].reduce((acc, val) => {
      acc[val] = {
        ref: React.createRef(),
        id: val,
        ratio: 0,
      };
      return acc;
    }, {});

    const handleObserver = (entries) => {
      entries.forEach((entry) => (this.sections[entry.target.id].ratio = entry.intersectionRatio));

      const activeNav = Object.values(this.sections).reduce((acc, val) => {
        const equalRatio = val.ratio === acc.ratio;
        const spyPxVisible = val.id === "spy-px" && acc.id === "About";
        //About is active, spy-px and About have ratio=1, spy-px become active (to display no active nav...)
        return equalRatio ? (spyPxVisible ? val : acc) : val.ratio > acc.ratio ? val : acc;
      }, this.state.activeNav);

      if (activeNav.ratio >= this.state.activeNav.ratio) {
        //changed to ">=" for setting no active nav link when scroll at top
        let midpoint = Math.round(window.document.body.offsetHeight / 2);
        let showScrollBtn = window.scrollY > midpoint;

        this.setState({
          activeNav,
          showScrollBtn,
          midpoint,
        });

        let hash = activeNav.id === "spy-px" ? window.location.pathname : "#" + activeNav.id;
        window.history.replaceState(null, "", hash);
      }
    };

    this.observer = new IntersectionObserver(handleObserver, obsOpts);
  }

  componentDidMount() {
    Object.values(this.sections).forEach((val) => this.observer.observe(val.ref.current));
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = (e) => {
    this.setState({ scrolling: true });
    setTimeout(() => {
      this.setState({ scrolling: false });
    }, 300);
  };

  toggleModal = (e, userStories) => {
    if (e) e.preventDefault();

    if (this.state.showModal) {
      this.setState({
        showModal: false,
        frameSource: this.state.frameSource,
        storyText: this.state.storyText,
      });
    } else {
      this.setState({ showModal: true, frameSource: e.target.href, storyText: userStories });
    }
  };

  render() {
    const {
      showScrollBtn,
      activeNav: { id },
      showModal,
      frameSource,
      storyText,
    } = this.state;
    return (
      <div>
        <NavBar active={"#" + id} />

        <div id="spy-px" ref={this.sections["spy-px"].ref} />

        <main className="content">
          <About about={this.sections["About"].ref} />
          <Projects projects={this.sections["Projects"].ref} toggleModal={this.toggleModal} />
          <Contact contact={this.sections["Contact"].ref} />
        </main>

        <Modal show={showModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>User Stories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {storyText ? (
                storyText.split(".").map((textLine, i) => (
                  <div key={"story" + i} className="mb-2">
                    {textLine}
                  </div>
                ))
              ) : (
                <div>N/A</div>
              )}
              <small>{frameSource}</small>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={this.toggleModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <ScrollTopBtn vis={showScrollBtn} />
        <Footer />
      </div>
    );
  }
}

export default App;

/*
  <div id="state-obj">
          <div>showScrollBtn: {JSON.stringify(this.state.showScrollBtn, null, 1)}</div>
          <div>navActive: {JSON.stringify(this.state.navActive, null, 1)}</div>
          <div>midpoint: {JSON.stringify(this.state.midpoint, null, 1)}</div>
          <div>pageScrolled: {JSON.stringify(this.state.pageScrolled, null, 1)}</div>
        </div>
*/
