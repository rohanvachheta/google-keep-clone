import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faEdit,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const TextEditor = (props) => {
  return (
    <div class="container">
      <div class="center">
        <div className="text-editor">
          <div>
            <input placeholder="Take a note..." />
          </div>
          <div className="text-editor-icon">
            <span className="text-editor__icons">
              <FontAwesomeIcon icon={faCheckSquare} size="lg" />
            </span>{" "}
            <span className="text-editor__icons">
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </span>
            <span className="text-editor__icons">
              <FontAwesomeIcon icon={faImage} size="lg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

TextEditor.propTypes = {};

export default TextEditor;
