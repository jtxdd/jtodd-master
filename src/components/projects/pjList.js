import tributePage from "../../images/projects/tributePage.gif";
import apiMicroservices from "../../images/projects/apiMicroservices.png";
import landingPage from "../../images/projects/landingPage.gif";
import randQuote from "../../images/projects/randQuote.png";
import wikiViewer from "../../images/projects/wikiViewer.gif";
import markdownPreviewer from "../../images/projects/markdownPreviewer.png";
import calculator from "../../images/projects/calculator.gif";
import drumMachine from "../../images/projects/drumMachine.png";
import gameOfLife from "../../images/projects/gameOfLife.gif";
import pomodoroClock from "../../images/projects/pomodoroClock.png";
import barChart from "../../images/projects/barChart.png";
import scatterplot from "../../images/projects/scatterplot.png";
import heatMap from "../../images/projects/heatMap.png";
import choropleth from "../../images/projects/choropleth.png";
import treemap from "../../images/projects/treemap.png";
import forceGraph from "../../images/projects/forceGraph.png";
import meteorMap from "../../images/projects/meteorMap.gif";
import localWeather from "../../images/projects/localWeather.png";
import ticTacToe from "../../images/projects/ticTacToe.gif";
import recipeBox from "../../images/projects/recipeBox.png";
import hangman from "../../images/projects/hangman.gif";
import exerciseTracker from "../../images/projects/exerciseTracker.png";
import lightBright from "../../images/projects/lightBright.gif";
import stockChecker from "../../images/projects/stockChecker.png";
import simonGame from "../../images/projects/simonGame.gif";
import anonBoard from "../../images/projects/anonBoard.png";
import issueTracker from "../../images/projects/issueTracker.gif";
import personalLibrary from "../../images/projects/personalLibrary.png";
import parkSystem from "../../images/projects/parkSystem.png";
import attendSystem from "../../images/projects/attendSystem.png";
// import techDocPage from "../../images/projects/techDocPage.png";

/*
  - need to better organize/order gif vs png placement
    * like every other row has 1 gif or every row has 1 gif...

  - need to make all heights the same (some are taller than others...)
    * group gifs together & pngs together


  - 16 current pngs (18total w/ ung incl)
  - 11 current gifs
    * 27 current (29total)
    * 27/3=9rows?
  
  - FIX ISSUE TRACKER GIF - look closely at it
    ** review all gifs for uglies

  - how to lazyload? lazyload ea. row?

  - fix/change responsiveness of cards
    * they look like shit when 3/row & resize smaller...

  - review wiki viewers on codepen - choose one that is best
    * update pj list item if change

  - test all links for accuracy

  - attendance & parking system need links for showing rendered output?
*/

const pjList = [
  {
    key: "Tribute Page",
    img: tributePage,
    title: "Tribute Page",
    desc: "A wiki-styled page for a single topic",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page",
      toFinal: "https://codepen.io/j-todd/pen/PVxWam",
    },
    tech: [],
    userStories: `User Story #1: My tribute page should have an element with a corresponding id="main", which contains all other elements.

    User Story #2: I should see an element with a corresponding id="title", which contains a string that describes the subject of the tribute page.
    
    User Story #3: I should see either a figure or a div element with a corresponding id="img-div".
    
    User Story #4: Within the img-div element, I should see an img element with a corresponding id="image".
    
    User Story #5: Within the img-div element, I should see an element with a corresponding id="img-caption" that contains textual content describing the image shown in img-div.
    
    User Story #6: I should see an element with a corresponding id="tribute-info", which contains textual content describing the subject of the tribute page.
    
    User Story #7: I should see an a element with a corresponding id="tribute-link", which links to an outside site that contains additional information about the subject of the tribute page.
    
    User Story #8: The img element should responsively resize, relative to the width of its parent element, without exceeding its original size.
    
    User Story #9: The img element should be centered within its parent element.`,
  },
  {
    key: "api & microservice project",
    img: apiMicroservices,
    title: "API Microservices",
    desc: "Multiple microservice operations performed on the server side",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/",
      toFinal: "https://glitch.com/edit/#!/iced-kite?path=README.md%3A1%3A0",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "Landing Page",
    img: landingPage,
    title: "Landing Page",
    desc: {
      textBefore: "A ",
      link: "https://en.wikipedia.org/wiki/Call_to_action_(marketing)",
      linkText: "call to action ",
      textAfter: "marketing page for a made-up product",
    },
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page",
      toFinal: "https://codepen.io/j-todd/pen/VBEWzp",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "random quote machine",
    img: randQuote,
    title: "Quote Machine",
    desc: "View & tweet random quotes",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine",
      toFinal: "https://codepen.io/j-todd/pen/XBOKRx",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "wiki viewer",
    img: wikiViewer,
    title: "Wikipedia Viewer",
    desc: "Search & view wikipedia articles or view a random wiki page",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-wikipedia-viewer",
      toFinal: "https://codepen.io/j-todd/pen/ejXNbW",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "markdown previewer",
    img: markdownPreviewer,
    title: "Markdown Previewer",
    desc: "Parse & render Markdown syntax",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer",
      toFinal: "https://codepen.io/j-todd/pen/JBxZXy",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "Calculator",
    img: calculator,
    title: "Calculator",
    desc: {
      textBefore: "A ",
      link: "https://en.wikipedia.org/wiki/Calculator_input_methods",
      linkText: "formula ",
      textAfter: "calculator",
    },
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator",
      toFinal: "https://codepen.io/j-todd/pen/ePyoPo",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "drum machine",
    img: drumMachine,
    title: "Drum Machine",
    desc: "Drum pads that play audio samples",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine",
      toFinal: "https://codepen.io/j-todd/pen/JBxZRr",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "game of life",
    img: gameOfLife,
    title: "Game of Life",
    desc: {
      textBefore: "Play ",
      link: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",
      linkText: "Conway's Game of Life ",
      textAfter: "",
    },
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-the-game-of-life",
      toFinal: "https://codepen.io/j-todd/pen/aarxVd",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "Pomodoro Clock",
    img: pomodoroClock,
    title: "Pomodoro Clock",
    desc: "Timer for studying & taking breaks",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock",
      toFinal: "https://codepen.io/j-todd/pen/xyjVgK",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "bar chart",
    img: barChart,
    title: "Bar Chart",
    desc: "D3 bar chart using US GDP data",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-bar-chart",
      toFinal: "https://codepen.io/j-todd/pen/QJLLQG",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "scatterplot graph",
    img: scatterplot,
    title: "Scatterplot Graph",
    desc: "D3 scatterplot of Tour de France times",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-scatterplot-graph",
      toFinal: "https://codepen.io/j-todd/pen/zMYNMb",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "heat map",
    img: heatMap,
    title: "Heat Map",
    desc: "D3 heat map of monthly temperature variances",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map",
      toFinal: "https://codepen.io/j-todd/pen/GwJxwK",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "choropleth map",
    img: choropleth,
    title: "Choropleth Map",
    desc: "D3 choropleth map of education attainment per US county",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map",
      toFinal: "https://codepen.io/j-todd/pen/dQMwQa",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "treemap diagram",
    img: treemap,
    title: "Treemap Diagram",
    desc: "D3 treemap diagram with multiple datasets",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-treemap-diagram",
      toFinal: "https://codepen.io/j-todd/pen/ZmpLQm",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "force directed graph",
    img: forceGraph,
    title: "Force Graph",
    desc: "D3 force-simulated-graph of countries sharing borders",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/show-national-contiguity-with-a-force-directed-graph",
      toFinal: "https://codepen.io/j-todd/pen/oQBNKb",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "map data across the globe (meteors)",
    img: meteorMap,
    title: "Projection Map",
    desc: "D3 projection map showing global meteorite landings",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/map-data-across-the-globe",
      toFinal: "https://codepen.io/j-todd/pen/WYppxM",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "local weather",
    img: localWeather,
    title: "Local Weather",
    desc: "5-day hourly forecast for your current location",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/show-the-local-weather",
      toFinal: "https://codepen.io/j-todd/pen/jvLLax",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "tic tac toe",
    img: ticTacToe,
    title: "Tic-Tac-Toe",
    desc: "Tic-tac-toe game with AI",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-tic-tac-toe-game",
      toFinal: "https://codepen.io/j-todd/pen/MBdRxq",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "recipe box",
    img: recipeBox,
    title: "Recipe Box",
    desc: "Create, edit, & delete recipes",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-recipe-box",
      toFinal: "https://codepen.io/j-todd/pen/EebeLd",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "hangman",
    img: hangman,
    title: "Hangman",
    desc: "Guess the blanks before the stick figure is drawn",
    link: { toDetails: "N/A", toFinal: "https://codepen.io/j-todd/pen/djzRYN" },
    tech: [],
    userStories: ``,
  },
  {
    key: "exercise tracker",
    img: exerciseTracker,
    title: "Exercise Tracker",
    desc: "Track exercises with CRUD operations",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker",
      toFinal: "https://glitch.com/edit/#!/oxidized-beryl?path=README.md%3A1%3A0",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "light-bright",
    img: lightBright,
    title: "Light-Bright",
    desc: "Color the spaces to create a drawing",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-light-bright-app",
      toFinal: "https://codepen.io/j-todd/pen/qMoJog",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "stock price checker",
    img: stockChecker,
    title: "Stock Checker",
    desc: "Search, compare, & like stocks",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/stock-price-checker",
      toFinal: "https://glitch.com/edit/#!/admitted-handstand?path=README.md%3A1%3A0",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "simon",
    img: simonGame,
    title: "Simon",
    desc: "Listen & watch to replicate the sequence",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-simon-game",
      toFinal: "https://codepen.io/j-todd/pen/zLVyYE",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "anon message board",
    img: anonBoard,
    title: "Message Board",
    desc: "Anonymous message board with CRUD operations",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/anonymous-message-board",
      toFinal: "https://glitch.com/edit/#!/adorable-cockroach?path=README.md%3A1%3A0",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "issue tracker",
    img: issueTracker,
    title: "Issue Tracker",
    desc: "Manage project issues with CRUD operations",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/issue-tracker",
      toFinal: "https://glitch.com/edit/#!/beryl-omelet?path=README.md%3A1%3A0",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "personal library",
    img: personalLibrary,
    title: "Personal Library",
    desc: "Manage a book collection with CRUD operations",
    link: {
      toDetails:
        "https://www.freecodecamp.org/learn/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/personal-library",
      toFinal: "https://glitch.com/edit/#!/quirky-tie?path=README.md%3A1%3A0",
    },
    tech: [],
    userStories: ``,
  },
  {
    key: "UNG parking services",
    img: parkSystem,
    title: "Parking System",
    desc: "Track & manage parking services",
    link: { toDetails: "https://github.com/jtxdd/Parking_Services_System", toFinal: "" },
    tech: [],
    userStories: ``,
  },
  {
    key: "UNG attendance system",
    img: attendSystem,
    title: "Attendance System",
    desc: "Track & manage student attendance",
    link: { toDetails: "https://github.com/jtxdd/UNG_AutoAttendance", toFinal: "" },
    tech: [],
    userStories: ``,
  },
  /*
    // ------ LEFT OUT TO HAVE EVEN # OF PRJX -----
    {
      key: "tech doc page",
      img: techDocPage,
      title: "Technical Docs",
      desc: "A static page with example text documenting the javascript language",
      link: {
        toDetails:
          "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page",
        toFinal: "https://codepen.io/j-todd/pen/bjQYeY",
      },
    },
  */
];

const prjx = [...pjList];
export default prjx;
