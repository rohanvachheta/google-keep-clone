import React, { useState } from "react";
import PropTypes from "prop-types";

const MouseOver = (props) => {
  const [onmouseOver, setonmouseOver] = useState(false);

  const handleMouseOver = () => {
    setonmouseOver(true);
  };
  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={() => setonmouseOver(false)}
    >
      {props.render(onmouseOver)}
    </div>
  );
};

MouseOver.propTypes = {};

export default MouseOver;
