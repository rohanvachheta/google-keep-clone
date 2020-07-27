import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import MouseOver from "../../commonHoc/onMouseHover";

const KeepNoteCard = ({ title, desc }) => {
  return (
    <MouseOver
      render={(isActive) => {
        return (
          <div className={`note-card ${isActive && "note-card-hover"} `}>
            <div className="d-flex justify-content-center ">
              <div className="note-card__title">
                <strong>{title}</strong>
              </div>
              <div>
                <span className="note-card-icon">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span className="note-card-icon">
                  <input type="checkbox" />
                </span>
              </div>
            </div>
            {desc}
          </div>
        );
      }}
    />
  );
};

KeepNoteCard.propTypes = {};

export default KeepNoteCard;
