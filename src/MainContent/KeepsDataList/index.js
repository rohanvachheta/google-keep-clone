import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-spring/renderprops";

import KeepNoteCard from "../keepNoteCard";
import "./index.css";
import NoteContext from "../../context/noteData.context";

const ListTransition = ({ list, DeleteNote, addDoneNote }) => {
  return (
    <Transition
      items={list}
      keys={(item) => item.id}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {(item) => (props) => (
        <div style={props} key={item.id}>
          <KeepNoteCard
            {...item}
            key={item.id}
            DeleteNote={DeleteNote}
            addDoneNote={addDoneNote}
          />
        </div>
      )}
    </Transition>
  );
};

const KeepsDataList = (props) => {
  const { DeleteNote, addDoneNote, searchValue } = useContext(NoteContext);

  let { list, doneNotes } = useContext(NoteContext);

  if (searchValue) {
    list = list.filter((item) => item.desc.toLowerCase().includes(searchValue));

    doneNotes = doneNotes.filter((item) =>
      item.desc.toLowerCase().includes(searchValue)
    );
  }

  let doneNotesList = null;
  if (doneNotes && doneNotes.length) {
    doneNotesList = (
      <>
        <span className="list-title">
          <strong>done Notes</strong>
        </span>
        <div className="note-card-list">
          <ListTransition
            list={doneNotes}
            DeleteNote={DeleteNote}
            addDoneNote={addDoneNote}
          />
          <br />
        </div>
      </>
    );
  }
  return (
    <>
      {doneNotesList}

      {!!list.length && (
        <span className="list-title">
          <strong>all Notes</strong>
        </span>
      )}
      <div className="note-card-list">
        <ListTransition
          list={list}
          DeleteNote={DeleteNote}
          addDoneNote={addDoneNote}
        />
      </div>
    </>
  );
};

KeepsDataList.propTypes = {};

export default KeepsDataList;
