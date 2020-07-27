/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faEdit,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import NoteContext from "./../../context/noteData.context";

const TextEditor = () => {
  const [isFocused, setisFocused] = useState(false);
  const [imageUrl, setimageUrl] = useState("");
  const [inputValue, setinputValue] = useState("");
  const inputFileRef = React.createRef();
  const onFocus = () => {
    setisFocused(true);
  };
  const onBlur = () => {
    setisFocused(false);
  };

  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        setimageUrl(URL.createObjectURL(file));
        setisFocused(true);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
    //
  };

  const removeFocusInput = () => {
    setisFocused(false);
    setimageUrl("");
  };

  const { addNote } = useContext(NoteContext);

  const saveNote = () => {
    addNote({
      imageUrl,
      desc: inputValue,
    });
    setinputValue("");
    setimageUrl("");
  };

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div className="center">
      <div
        className={` ${
          isFocused ? "text-editor text-block-editor" : "text-editor"
        } `}
      >
        <div>
          {imageUrl && (
            <img alt="note" width="100%" height="200" src={imageUrl} />
          )}
          {isFocused ? (
            <textarea
              autoFocus
              placeholder="Take a note..."
              onFocus={onFocus}
              onKeyDown={handleKeyDown}
              value={inputValue}
              onChange={handleChange}
            />
          ) : (
            <input
              placeholder="Take a note..."
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={handleKeyDown}
              value={inputValue}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="d-flex justify-content-center">
          <div className="text-editor-icon">
            <span className="text-editor__icons">
              <FontAwesomeIcon icon={faCheckSquare} size="lg" />
            </span>{" "}
            <span className="text-editor__icons">
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </span>
            <span className="text-editor__icons">
              <input
                ref={inputFileRef}
                type="file"
                onChange={onImageChange}
                className="filetype d-none"
                id="group_image"
              />
              <a href="#" onClick={handleImageUpload}>
                <FontAwesomeIcon icon={faImage} size="lg" />
              </a>
            </span>
          </div>
          {isFocused && (
            <div>
              {(inputValue || imageUrl) && (
                <button className="btn" onClick={saveNote}>
                  save
                </button>
              )}
              <button
                className="btn"
                style={{ marginLeft: "10px" }}
                onClick={removeFocusInput}
              >
                cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
