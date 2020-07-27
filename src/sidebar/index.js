import React, { useState } from "react";
import PropTypes from "prop-types";
import options from "./util";
import OptionItem from "./optionItem";

const SideBar = ({ isSideBarOpen }) => {
  const [selectedState, setselectedState] = useState(0);
  const optionsList = options.map(({ name, icon }, index) => {
    return (
      <OptionItem
        key={name}
        name={name}
        icon={icon}
        isfirst={index === selectedState}
        isSideBarOpen={isSideBarOpen}
        setselectedState={() => setselectedState(index)}
      />
    );
  });

  return <div>{optionsList}</div>;
};

SideBar.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
};

export default SideBar;
