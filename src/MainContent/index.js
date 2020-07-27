import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import TextEditor from "./TextEditor";
import KeepsDataList from "./KeepsDataList";

const MainContent = (props) => {
  return (
    <main>
      <div className="keep-main">
        <TextEditor />
        <KeepsDataList />
      </div>
    </main>
  );
};

MainContent.propTypes = {};

export default MainContent;
