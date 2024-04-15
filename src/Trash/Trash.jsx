import CardNotes from "../Card_notes/CardNotes";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function Trash({ deletedNotes, deletNote, endPoint }) {
  const handleClick = (e) => {
    const ENDPOINT = `${endPoint}/${e.target.value}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(ENDPOINT, options).then((response) => {
      if (response.ok) {
        deletNote(e.target.value);
        console.log("Tarea eliminada con éxito");
      } else {
        console.error("Error al eliminar la tarea");
      }
    });
  };

  return (
    <div className={styles.containerTrash}>
      {Array.isArray(deletedNotes) ? (
        deletedNotes.map((noteDelete) => (
          <CardNotes
            key={noteDelete.id}
            title={noteDelete.title}
            parraf={noteDelete.body}
            handleClick={handleClick}
            value={noteDelete.id}
          />
          // <li key={noteDelete.id}>
          //   <h2>{noteDelete.title}</h2>
          //   <p>{noteDelete.body}</p>
          //   <button onClick={handleClick} value={noteDelete.id}>
          //     eliminar
          //   </button>
          // </li>
        ))
      ) : (
        <p>No hay notas eliminadas.</p>
      )}
    </div>
  );
}

Trash.propTypes = {
  deletedNotes: PropTypes.array,
  deletNote: PropTypes.func,
  endPoint: PropTypes.string,
};

export default Trash;
