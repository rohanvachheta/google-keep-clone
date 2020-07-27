import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faRedo, faListAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const HeaderMenuSideBar = (props) => {
  return (
    <div className="sidebar-icon">
      <span className="header-menu__icons">
        <FontAwesomeIcon icon={faRedo} size="1x" />
      </span>

      <span className="header-menu__icons">
        <FontAwesomeIcon icon={faListAlt} size="1x" />
      </span>

      <span className="header-menu__icons">
        <FontAwesomeIcon icon={faCog} size="1x" />
      </span>
    </div>
  );
};

HeaderMenuSideBar.propTypes = {};

export default React.memo(HeaderMenuSideBar);
