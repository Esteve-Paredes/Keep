import { useEffect, useState } from "react";
import ListNote from "../ListNote/ListNote";
import Trash from "../Trash/Trash";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import ColorPalette from "../Card_notes/PaletteColors/ColorPalette";
import PaletteColor from "../Card_notes/IconsCard/PaletteColor.svg";

function Form({ bolean, endPoint }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [deletedNotes, setDeletedNotes] = useState([]);
  const [notes, setNotes] = useState([]);

  const [showColorPicker, setShowColorPicker] = useState(true);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  const deletNote = (id) => {
    const newNotes = deletedNotes.filter((item) => item.id !== id);
    setDeletedNotes(newNotes);
  };

  const addTrash = (item) => {
    setDeletedNotes([...deletedNotes, item]);
  };

  const updatedNotes = (notes) => {
    setNotes(notes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title: title, body: content, color: selectedColor };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (title !== "" && content !== "") {
      fetch(endPoint, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            setTitle("");
            setContent("");
            setNotes([...notes, data.note]);
            changeColor(data.note.color);
          }
        });
    }
  };

  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        updatedNotes(data.notes);
      });
  }, []);

  return (
    <div className={styles.main}>
      <form
        className={styles.noteForm}
        onSubmit={handleSubmit}
        style={{
          backgroundColor: selectedColor,
        }}
      >
        <div className={styles.inputs}>
          <input
            className={styles.title}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className={styles.content}
            type="text"
            name="content"
            placeholder="Your note..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttons}>
          <div
            className="card-notes__container-buttons"
            style={{
              position: showColorPicker ? "static" : "relative",
            }}
          >
            {selectedColor ? (
              <ColorPalette
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            ) : (
              <div></div>
            )}

            <button className="card-notes__button" onClick={toggleColorPicker}>
              <img src={PaletteColor} alt="Paleta de colores" />
            </button>
          </div>
          <button className={styles.buttonSubmit}>Keep It!</button>
        </div>
      </form>
      <div>
        {bolean ? (
          <ListNote
            notes={notes}
            addTrash={addTrash}
            updatedNotes={updatedNotes}
            selectColor={selectedColor}
          />
        ) : (
          <Trash
            deletedNotes={deletedNotes}
            deletNote={deletNote}
            endPoint={endPoint}
          />
        )}
      </div>
    </div>
  );
}

Form.propTypes = {
  bolean: PropTypes.bool,
  endPoint: PropTypes.string,
};

export default Form;
