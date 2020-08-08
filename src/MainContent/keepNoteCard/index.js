/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import MouseOver from "../../commonHoc/onMouseHover";

function createMarkup(dec) {
  return { __html: dec };
}

const KeepNoteCard = ({
  title,
  desc,
  DeleteNote,
  id,
  addDoneNote,
  imageUrl,
  doneNotes,
}) => {
  const handleDelete = () => DeleteNote(id, doneNotes);
  const handleDoneChange = () => addDoneNote({ title, desc, id, imageUrl });
  return (
    <MouseOver
      render={(isActive) => {
        return (
          <div className={`note-card ${isActive && "note-card-hover"} `}>
            <div
              className="d-flex justify-content-center mb-2 "
              style={{ whiteSpace: "pre-wrap" }}
            >
              <div className="note-card__title">
                <strong>{title}</strong>
              </div>
              <div>
                <a href="#" onClick={handleDelete} className="note-card-icon">
                  <FontAwesomeIcon icon={faTrash} />
                </a>
                <span className="note-card-icon">
                  {!doneNotes && (
                    <input type="checkbox" onChange={handleDoneChange} />
                  )}
                </span>
              </div>
            </div>
            {desc.split("\n").map((i) => {
              return <p>{i}</p>;
            })}
            {imageUrl && (
              <img height="130" width="100%" alt="note" src={imageUrl} />
            )}
          </div>
        );
      }}
    />
  );
};

KeepNoteCard.propTypes = {
  DeleteNote: PropTypes.func.isRequired,
  addDoneNote: PropTypes.func.isRequired,
  desc: PropTypes.string,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  doneNotes: PropTypes.bool,
};
KeepNoteCard.defaultProps = {
  desc: "",
  id: PropTypes.number.isRequired,
  imageUrl: "",
  title: "",
  doneNotes: false,
};

export default KeepNoteCard;
