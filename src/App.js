import React from "react";
import SideBar from "./sidebar";
import Header from "./header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <div style={{ width: "15%" }}>
          <SideBar />
        </div>
        <div style={{ width: "85%" }}>main</div>
      </div>
    </div>
  );
};

export default App;
