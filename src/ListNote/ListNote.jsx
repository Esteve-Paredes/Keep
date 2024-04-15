import PropTypes from "prop-types";
import CardNotes from "../Card_notes/CardNotes";
import styles from "./styles.module.css";

function ListNote({ addTrash, notes, updatedNotes, selectColor }) {
  const handleClick = (e) => {
    const item = notes.find((item) => item.id === e.target.value);
    const newNotes = notes.filter((item) => item.id !== e.target.value);
    updatedNotes(newNotes);
    addTrash(item);
  };

  return (
    <div className={styles.containerList}>
      {Array.isArray(notes) ? (
        notes.map((note) => (
          <CardNotes
            key={note.id}
            title={note.title}
            parraf={note.body}
            handleClick={handleClick}
            value={note.id}
            selectColor={selectColor}
          />
        ))
      ) : (
        <p>No hay notas disponibles</p>
      )}
    </div>
  );
}

ListNote.propTypes = {
  addTrash: PropTypes.func,
  notes: PropTypes.array,
  updatedNotes: PropTypes.func,
};

export default ListNote;
