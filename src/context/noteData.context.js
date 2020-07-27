import { createContext } from "react";

const NoteContext = createContext({
  list: [],
  addNote: () => {},
  DeleteNote: () => {},
  filterNote: () => {},
  searchValue: "",
  doneNotes: [],
  addDoneNote: () => {},
  hanelSearch: () => {},
});

export default NoteContext;
