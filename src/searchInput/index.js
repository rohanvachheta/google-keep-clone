import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import NoteContext from '../context/noteData.context';

const SearchInput = props => {
  const { searchValue, hanelSearch } = useContext(NoteContext);

  const handleSearch = event => {
    hanelSearch(event.target.value);
  };

  return (
    <form>
      <div className="search-input">
        <span className="search-input__icon">
          <FontAwesomeIcon icon={faSearch} size="1x" />
        </span>
        <input
          value={searchValue}
          placeholder="Search"
          className="search-input__input"
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};

SearchInput.propTypes = {};

export default React.memo(SearchInput);
