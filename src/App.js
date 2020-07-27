import React from "react";
import SideBar from "./sidebar";
import Header from "./header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ width: "300px" }}>
        <SideBar />
      </div>
    </div>
  );
};

export default App;
