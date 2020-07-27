import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import SearchInput from "../searchInput";
import HeaderMenuSideBar from "./HeaderMenuSideBar";

const HeaderMenu = ({ togglemenu }) => {
  return (
    <header>
      <div className="main-header">
        <div className="small-menu">
          <a className="header-menu__icons" onClick={togglemenu}>
            <FontAwesomeIcon icon={faBars} size="1x" />
          </a>
          <div className="logo">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
              alt="logo"
              width="40"
              height="40"
            />
          </div>
          <h3>Keep</h3>
        </div>
        <SearchInput />
        <HeaderMenuSideBar />
      </div>
    </header>
  );
};

HeaderMenu.propTypes = {};

export default React.memo(HeaderMenu, () => false);
