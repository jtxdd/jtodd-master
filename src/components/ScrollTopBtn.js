import React from "react";

function ScrollTopBtn(props) {
  return (
    <button
      id="scroll-top-btn"
      className={`${props.vis ? "vis" : "invis"} btn btn-dark`}
      onClick={() => window.scroll(0, 0)}
    />
  );
}

export default ScrollTopBtn;
