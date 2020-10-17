import React, { Component } from 'react';
import NoteContext from '../context/noteData.context';

export default class TestComponent extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = NoteContext;

  render() {
    return (
      <NoteContext.Consumer>
        {({ searchValue, hanelSearch }) => {
          const handleSearch = (event) => {
            hanelSearch(event.target.value);
          };

          return (
            <input
              value={searchValue}
              placeholder="Search"
              className="search-input__input"
              onChange={handleSearch}
              style={{ display: 'none' }}
            />
          );
        }}
      </NoteContext.Consumer>
    );
  }
}

// import React, { useContext } from "react";
// import NoteContext from "../context/noteData.context";

// const SearchInput = (props) => {
//   const aa = useContext(NoteContext);
//   console.log("SearchInput -> searchValue:", aa);

//   return "pjpo";
// };

// SearchInput.propTypes = {};

// export default React.memo(SearchInput);
