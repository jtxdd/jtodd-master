import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Headroom from "react-headroom";

const navLinks = [{ id: "About" }, { id: "Projects" }, { id: "Contact" }];
const chars = "!<>-_\\/[]{}—=+*^?#________";
const phrases = ["Jordan Todd", "J.Todd", "J.T.", "Jory", "Todd, Jordan", "Todd, J.", "jtodd.xyz"];
const tOuts = [800, 800, 800, 500, 900, 1000, 5000];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      text: "",
      queue: [],
      request: requestAnimationFrame(this.frameRequest),
      counter: 0,
      pinned: true,
    };

    this.frame = 0;

    this.resolve = (counter) => {
      let reinit = counter + 1 >= phrases.length;

      this.setState({
        queue: [],
        counter: reinit ? 0 : counter + 1,
      });

      setTimeout(() => this.scramble(), tOuts[counter]);
    };
  }

  componentDidMount() {
    this.scramble();
  }

  scramble = () => {
    this.setText(phrases[this.state.counter]);
  };

  setText = (newText) => {
    let { queue, request } = this.state;

    const text = this.ref.current.innerText;
    const length = Math.max(text.length, newText.length);

    for (let i = 0; i < length; i++) {
      const from = text[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
      this.setState({ queue });
    }

    cancelAnimationFrame(request);

    this.frame = 0;
    this.update();
  };

  update = () => {
    let { queue, counter } = this.state;

    let output = "";
    let complete = 0;

    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else {
        if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];

            this.setState((prev) => {
              prev.queue[i].char = char;
              return prev;
            });
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
    }

    this.ref.current.innerHTML = output;

    if (complete === queue.length) {
      this.resolve(counter);
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  frameRequest = (e) => {
    //console.log(e);
  };

  onPin = (pinned) => {
    this.setState({ pinned });
  };

  onUnpin = (pinned) => {
    this.setState({ pinned });
  };

  onUnfix = (pinned) => {
    this.setState({ pinned });
  };

  render() {
    return (
      <Headroom
        onPin={() => this.onPin(true)}
        onUnpin={() => this.onUnpin(false)}
        onUnfix={() => this.onUnfix(true)}
      >
        <Navbar className="dark-nav" collapseOnSelect expand="sm" variant="dark">
          <Navbar.Brand href="/">
            <div className="scramble-wrap">
              <div className="text-scramble" ref={this.ref}>
                JTodd
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="NavBar" />
          <Navbar.Collapse id="NavBar">
            <Nav activeKey={this.props.active.slice(1)}>
              {navLinks.map((link) => (
                <Nav.Link key={link.id} href={"#" + link.id} eventKey={link.id}>
                  {link.id}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    );
  }
}

export default NavBar;

/*
  function NavBar(props) {
    return (
      <Headroom>
        <Navbar className="dark-nav" collapseOnSelect expand="sm" variant="dark">
          <Navbar.Brand href="/">
            <img src={brandGif} alt="jordan todd animated text" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="NavBar" />
          <Navbar.Collapse id="NavBar">
            <Nav activeKey={props.active.slice(1)}>
              {navLinks.map((link) => (
                <Nav.Link key={link.id} href={"#" + link.id} eventKey={link.id}>
                  {link.id}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    );
  }
*/
