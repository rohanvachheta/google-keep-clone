import React, { useState } from "react";
import NoteContext from "../context/noteData.context";
import { saveState, loadState } from "../localStorage";

const NoteProvider = ({ children }) => {
  const addDoneNote = (noteDetails) => {
    changeState((prevState) => ({
      ...prevState,
      doneNotes: [...prevState.doneNotes, noteDetails],
      list: prevState.list.filter((note) => noteDetails.id !== note.id),
    }));
  };

  const filterNote = () => {
    //
  };

  const DeleteNote = (deleteId, isDoneNote = false) => {
    if (isDoneNote) {
      changeState((prevState) => ({
        ...prevState,
        doneNotes: prevState.doneNotes.filter((note) => note.id !== deleteId),
      }));
      return;
    }
    changeState((prevState) => ({
      ...prevState,
      list: prevState.list.filter((note) => note.id !== deleteId),
    }));
  };

  const addNote = (value) => {
    changeState((prevState) => ({
      ...prevState,
      list: [...prevState.list, { ...value, id: prevState.uniqueId }],
      uniqueId: prevState.uniqueId + 1,
    }));
  };

  const hanelSearch = (value) => {
    changeState((prevState) => ({
      ...prevState,
      searchValue: value,
    }));
  };

  const noteInitState = {
    list: [],
    addNote,
    DeleteNote,
    filterNote,
    searchValue: "",
    doneNotes: [],
    addDoneNote,
    uniqueId: 1,
    hanelSearch,
    ...loadState(),
  };

  const [noteState, changeState] = useState(noteInitState);

  saveState(noteState);
  return (
    <NoteContext.Provider value={noteState}>{children}</NoteContext.Provider>
  );
};

export default NoteProvider;
