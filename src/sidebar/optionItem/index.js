import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const OptionItem = ({ name, icon, isfirst }) => {
  return (
    <div className={`option-item ${isfirst && "option-item-active"}`}>
      <span className="option-item__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="option-item__name">{name}</span>
    </div>
  );
};

OptionItem.propTypes = {};

export default OptionItem;
