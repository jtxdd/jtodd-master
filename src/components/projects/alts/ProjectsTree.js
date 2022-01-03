/*

  - diff potential projects section components:
    * collapsing project type (front, back, full) with carousel
    * d3 tree layout

  - saved in case decide to use...
*/

/*
  import Carousel from "react-bootstrap/Carousel";

  import ProjectsAccordion from "./ProjectsAccordion.js";

  import calculator from "../images/projects/calculator.gif";
  import tributePage from "../images/projects/tributePage.gif";
  import lightBright from "../images/projects/lightBright.gif";
  import gameOfLife from "../images/projects/gameOfLife.gif";

  // list = all project objects
  const list = [
  {
    img: calculator,
    title: "one",
    text: "text about project one",
    tech: [1, 2, 3],
    group: "front"
  },
  {
    img: tributePage,
    title: "two",
    text: "text about project two",
    tech: [2, 3, 6],
    group: "front"
  },
  {
    img: lightBright,
    title: "three",
    text: "text about project three",
    tech: [4, 8, 9, 2, 3],
    group: "back"
  },
  {
    img: gameOfLife,
    title: "four",
    text: "text about project four",
    tech: [5, 7, 9],
    group: "full"
  },
  {
    img: calculator,
    title: "one",
    text: "text about project one",
    tech: [1, 2, 3],
    group: "front"
  },
  {
    img: tributePage,
    title: "two",
    text: "text about project two",
    tech: [2, 3, 6],
    group: "front"
  },
  {
    img: lightBright,
    title: "three",
    text: "text about project three",
    tech: [4, 8, 9, 2, 3],
    group: "back"
  },
  {
    img: gameOfLife,
    title: "four",
    text: "text about project four",
    tech: [5, 7, 9],
    group: "back"
  }
  ];

  // filters pj list array into object of arrays for each group (front-end, back-end, full-stack)
  const groups = {
  front: list.filter(el => el.group === "front"),
  back: list.filter(el => el.group === "back"),
  full: list.filter(el => el.group === "full")
  };

  // renders the cards, which are selectable or have links to further view the contents of the project
  function Projects(props) {
  return (
    <section id="Projects" className="module">
      <h3>Projects</h3>
      <div className="module-content">
        <div className="row">
          <div className="col-md-6">
            <ProjectsAccordion groups={groups} />
          </div>
          <div className="col-md-6">
            <Carousel controls={false} indicators={false} fade={Math.round(Math.random())}>
              <Carousel.Item>
                <img className="img-fluid" src={tributePage} alt="tribute page" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-fluid" src={lightBright} alt="light bright" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-fluid" src={calculator} alt="calculator" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-fluid" src={gameOfLife} alt="game of life" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
  }
*/

//-----------------------------

// import Tree from "react-d3-tree";

/*
  const frontEnd = [{ name: "Front-End", children: FRONTEND }];
  const backEnd = [{ name: "Back-End", children: BACKEND }];
  const fullStack = [{ name: "Full-Stack", children: FULLSTACK }];
*/

/*
  const FRONTEND = [
    {
      name: "Responsive",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [
        { name: "Tribute Page" },
        { name: "Survey Form" },
        { name: "Product Landing Page" },
        { name: "Technical Documentation Page" },
        { name: "Personal Portfolio Webpage" }
      ]
    },
    {
      name: "Libraries",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [
        { name: "Random Quote Machine" },
        { name: "Markdown Previewer" },
        { name: "Drum Machine" },
        { name: "Calculator" },
        { name: "Pomodoro Clock" }
      ]
    },
    {
      name: "Data Visualization",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [
        { name: "Bar Chart" },
        { name: "Scatterplot Graph" },
        { name: "Heat Map" },
        { name: "Choropleth Map" },
        { name: "Treemap Diagram" },
        { name: "Force Directed Graph" },
        { name: "Bubble Plot" }
      ]
    },
    {
      name: "Take Home",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [
        { name: "Local Weather" },
        { name: "Wikipedia Viewer" },
        { name: "Twitch JSON API" },
        { name: "Tic Tac Toe" },
        { name: "Simon" },
        { name: "Recipe Box" },
        { name: "Game of Life" },
        { name: "Light-Bright" },
        { name: "Hangman" }
      ]
    }
  ];


  const BACKEND = [
    {
      name: "APIs & Microservices",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [
        { name: "Timestamp" },
        { name: "Request Header Parser" },
        { name: "URL Shortener" },
        { name: "Exercise Tracker" },
        { name: "File Metadata" }
      ]
    },
    {
      name: "Personal",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [{ name: "Twitch Chatbot" }]
    }
  ];


  const FULLSTACK = [
    {
      name: "Information Security & Quality Assurance",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [
        { name: "Metric-Imperial Converter" },
        { name: "Issue Tracker" },
        { name: "Personal Library" },
        { name: "Stock Price Checker" },
        { name: "Anonymous Message Board" }
      ]
    },
    {
      name: "Personal",
      collapsible: true,
      _collapsed: true,
      shouldCollapseNeighborNodes: true,
      children: [{ name: "UNG Attendance System" }, { name: "UNG Parking Services System" }]
    }
  ];


  const projects = [
    {
      children: [
        {
          name: "Front-End",
          _collapsed: true,
          shouldCollapseNeighborNodes: true,
          children: FRONTEND
        },
        {
          name: "Back-End",
          _collapsed: true,
          shouldCollapseNeighborNodes: true,
          children: BACKEND
        },
        {
          name: "Full-Stack",
          _collapsed: true,
          shouldCollapseNeighborNodes: true,
          children: FULLSTACK
        }
      ]
    }
  ];


  const styled = {
    width: "100%",
    height: "50vh",
    border: "1px solid rgba(0,0,0,0.25)"
  };

  class Projects extends Component {
    constructor(props) {
      super(props);
      this.treeRef = React.createRef();
      this.state = {
        translate: {},
        selected: []
      };
    }

    componentDidMount() {
      const dim = this.treeRef.current.getBoundingClientRect();

      this.setState({
        translate: {
          x: dim.width / 8,
          y: dim.height / 2
        }
      });
    }

    nodeClick = (nodeData, evt) => {
      console.log(nodeData);
      console.log("");
      console.log(evt);
    };

    render() {
      const { translate } = this.state;
      return (
        <section id="Projects">
          <h3>Projects</h3>
          <div style={styled} ref={this.treeRef}>
            <Tree
              data={projects}
              translate={translate}
              onClick={this.nodeClick}
              initialDepth={0}
              depthFactor={100}
              nodeSvgShape={{ shape: "circle", shapeProps: { r: 5 } }}
              textLayout={{ textAnchor: "start", x: 10, y: -10, transform: "scale(0.75)" }}
            />
          </div>
        </section>
      );
    }
  }
*/
