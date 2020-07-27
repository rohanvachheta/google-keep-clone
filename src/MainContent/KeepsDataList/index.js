import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-spring/renderprops";

import KeepNoteCard from "../keepNoteCard";
import "./index.css";

const dummyData = [
  {
    title: "test",
    desc: "test",
    id: 1,
  },
  {
    title: "test",
    id: 2,
    desc:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptas et explicabo illum modi tenetur necessitatibus esse earum, voluptatem quo excepturi sit, optio nisi quas nobis ea repellendus minima.",
  },
];

const KeepsDataList = (props) => {
  return (
    <div className="note-card-list">
      <Transition
        items={dummyData}
        keys={(item) => item.id}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(item) => (props) => (
          <div style={props}>
            <KeepNoteCard {...item} />
          </div>
        )}
      </Transition>
    </div>
  );
};

KeepsDataList.propTypes = {};

export default KeepsDataList;
