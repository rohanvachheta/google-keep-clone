import React from "react";
import SideBar from "./sidebar";
import Header from "./header";
import MainContent from "./MainContent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <div style={{ width: "15%" }}>
          <SideBar />
        </div>
        <div style={{ width: "85%" }}>
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
