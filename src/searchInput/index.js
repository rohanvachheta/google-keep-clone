import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const SearchInput = (props) => {
  return (
    <form>
      <div className="search-input">
        <span className="search-input__icon">
          <FontAwesomeIcon icon={faSearch} size="1x" />
        </span>
        <input placeholder="Search" className="search-input__input" />
      </div>
    </form>
  );
};

SearchInput.propTypes = {};

export default React.memo(SearchInput);
