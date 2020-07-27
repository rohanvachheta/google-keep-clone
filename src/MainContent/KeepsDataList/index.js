import React from "react";
import PropTypes from "prop-types";
import KeepNoteCard from "../keepNoteCard";

const KeepsDataList = (props) => {
  return (
    <div className="note-card-list">
      <KeepNoteCard />
    </div>
  );
};

KeepsDataList.propTypes = {};

export default KeepsDataList;
