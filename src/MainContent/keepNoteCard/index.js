/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import MouseOver from "../../commonHoc/onMouseHover";

const KeepNoteCard = ({
  title,
  desc,
  DeleteNote,
  id,
  addDoneNote,
  imageUrl,
}) => {
  const handleDelete = () => DeleteNote(id);
  const handleDoneChange = () => addDoneNote({ title, desc, id, imageUrl });
  return (
    <MouseOver
      render={(isActive) => {
        return (
          <div className={`note-card ${isActive && "note-card-hover"} `}>
            <div className="d-flex justify-content-center mb-2 ">
              <div className="note-card__title">
                <strong>{title}</strong>
              </div>
              <div>
                <a href="#" onClick={handleDelete} className="note-card-icon">
                  <FontAwesomeIcon icon={faTrash} />
                </a>
                <span className="note-card-icon">
                  <input type="checkbox" onChange={handleDoneChange} />
                </span>
              </div>
            </div>
            {desc}
            {imageUrl && (
              <img height="130" width="100%" alt="note" src={imageUrl} />
            )}
          </div>
        );
      }}
    />
  );
};

KeepNoteCard.propTypes = {};

export default KeepNoteCard;
