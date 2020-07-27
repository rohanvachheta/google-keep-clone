import React from "react";
import PropTypes from "prop-types";
import KeepNoteCard from "../keepNoteCard";
import "./index.css";

const dummyData = [
  {
    title: "test",
    desc: "test",
  },
  {
    title: "test",
    desc:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptas et explicabo illum modi tenetur necessitatibus esse earum, voluptatem quo excepturi sit, optio nisi quas nobis ea repellendus minima.",
  },
];

const KeepsDataList = (props) => {
  return (
    <div className="note-card-list">
      {dummyData.map((item) => {
        return <KeepNoteCard {...item} />;
      })}
    </div>
  );
};

KeepsDataList.propTypes = {};

export default KeepsDataList;
