import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  //edit note
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);

  const idx = props.id;
  const notes = props.notes;
  const setNotes = props.setNotes;
  const editNote = () => {
    const notesList = [...notes];
    notesList[idx]["title"] = editTitle;
    notesList[idx]["content"] = editContent;
    setNotes(notesList);
    toggleEdit();
  };

  return (
    <div className="note">
      {edit ? (
        <div>
          {" "}
          <input
            class="form-control form-control-sm"
            placeholder="Edit Title"
            type="text"
            onChange={(e) => setEditTitle(e.target.value)}
            value={editTitle}
          />
          <textarea
            class="form-control form-control-sm mt-3"
            placeholder="Edit a note..."
            rows="3"
            onChange={(e) => setEditContent(e.target.value)}
            value={editContent}
          />
          <Zoom in={edit}>
            <Fab onClick={editNote}>
              <EditIcon />
            </Fab>
          </Zoom>
          <Zoom in={edit}>
            <Fab onClick={toggleEdit}>
              <CancelIcon />
            </Fab>
          </Zoom>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h1>{props.title}</h1>
            <button
              onClick={() => {
                setEditTitle(props.title);
                setEditContent(props.content);
                toggleEdit();
              }}
            >
              <EditIcon />
            </button>
          </div>
          <p>{props.content}</p>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
