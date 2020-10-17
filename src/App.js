import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import SideBar from './sidebar';

import Header from './header';
import MainContent from './MainContent';
import NoteProvider from './context/NoteProvider';
import TestComponent from './test/index';

const App = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(true);

  const togglemenu = () => setisSideBarOpen(!isSideBarOpen);

  return (
    <div className="App">
      <NoteProvider>
        <TestComponent />

        <Header togglemenu={togglemenu} isSideBarOpen={isSideBarOpen} />
        <div className="d-flex">
          <Spring
            from={{ width: isSideBarOpen ? '5%' : '15%' }}
            to={{ width: !isSideBarOpen ? '5%' : '15%' }}
          >
            {props => (
              <div style={props}>
                <SideBar isSideBarOpen={isSideBarOpen} />
              </div>
            )}
          </Spring>

          <div style={{ width: isSideBarOpen ? '95%' : '85%' }}>
            <MainContent />
          </div>
        </div>
      </NoteProvider>
    </div>
  );
};

export default App;
