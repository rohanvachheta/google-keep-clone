import React, { useState } from 'react';

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

export default MouseOver;
