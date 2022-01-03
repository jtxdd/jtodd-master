import React from "react";

import phImage from "../images/self/phImage.png";

function Headshot(props) {
  return (
    <div id="Headshot">
      <div className="headshot-wrap">
        <img id="headshot-img" className="img-fluid" src={phImage} alt="jordan headshot" />
      </div>
    </div>
  );
}

export default Headshot;
