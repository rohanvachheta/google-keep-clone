import React from "react";
import PropTypes from "prop-types";
import options from "./util";
import OptionItem from "./optionItem";

const SideBar = (props) => {
  const optionsList = options.map(({ name, icon }, index) => {
    return <OptionItem name={name} icon={icon} isfirst={index === 0} />;
  });

  return <div>{optionsList}</div>;
};

SideBar.propTypes = {};

export default SideBar;
