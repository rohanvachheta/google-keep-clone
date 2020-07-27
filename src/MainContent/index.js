import React from "react";
import "./index.css";
import TextEditor from "./TextEditor";
import KeepsDataList from "./KeepsDataList";

const MainContent = () => {
  return (
    <main>
      <div className="keep-main">
        <TextEditor />
        <KeepsDataList />
      </div>
    </main>
  );
};

export default MainContent;
