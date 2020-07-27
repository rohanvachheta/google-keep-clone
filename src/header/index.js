import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import SearchInput from "../searchInput";
import HeaderMenuSideBar from "./HeaderMenuSideBar";

const HeaderMenu = (props) => {
  return (
    <header>
      <div className="main-header">
        <div className="small-menu">
          <span className="header-menu__icons">
            <FontAwesomeIcon icon={faBars} size="1x" />
          </span>
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

export default HeaderMenu;
