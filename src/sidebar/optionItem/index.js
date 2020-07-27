import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spring } from "react-spring/renderprops";

import "./index.css";

const OptionItem = ({
  name,
  icon,
  isfirst,
  isSideBarOpen,
  setselectedState,
}) => {
  return (
    <div
      className={`option-item ${isfirst && "option-item-active"}`}
      onClick={setselectedState}
    >
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

OptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  isfirst: PropTypes.bool.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired,
  setselectedState: PropTypes.func.isRequired,
};

export default React.memo(OptionItem, () => false);
