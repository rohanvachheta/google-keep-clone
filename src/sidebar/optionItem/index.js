import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spring } from "react-spring/renderprops";

import "./index.css";

const OptionItem = ({ name, icon, isfirst, isSideBarOpen }) => {
  return (
    <div className={`option-item ${isfirst && "option-item-active"}`}>
      <span className="option-item__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      {isSideBarOpen && (
        <Spring delay={300} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <span style={props} className="option-item__name">
              {name}
            </span>
          )}
        </Spring>
      )}
    </div>
  );
};

OptionItem.propTypes = {};

export default OptionItem;
