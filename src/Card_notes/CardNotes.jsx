import { useState } from "react";
import "./CardNotes.css";
import PaletteColor from "./IconsCard/PaletteColor.svg";
import Trash from "./IconsCard/Trash.svg";
import ColorPalette from "./PaletteColors/ColorPalette";
import PropTypes from "prop-types";

export default function CardNotes({ title, parraf, handleClick, value }) {
  const [showColorPicker, setShowColorPicker] = useState(true);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    toggleColorPicker();
  };

  return (
    <div
      className="card-notes__container"
      style={{
        backgroundColor: selectedColor,
      }}
    >
      <span className="card-notes__title">{title}</span>
      <p className="card-notes__description">{parraf}</p>
      <div
        className="card-notes__container-buttons"
        style={{
          position: showColorPicker ? "static" : "relative",
        }}
      >
        {selectedColor ? (
          <ColorPalette
            handleColorSelection={handleColorSelection}
            setSelectedColor={setSelectedColor}
          />
        ) : (
          <div></div>
        )}

        <button className="card-notes__button" onClick={toggleColorPicker}>
          <img src={PaletteColor} alt="Paleta de colores" />
        </button>
        <button
          className="card-notes__button"
          onClick={handleClick}
          value={value}
        >
          <img src={Trash} alt="Trash" className="img" />
        </button>
      </div>
    </div>
  );
}

CardNotes.propTypes = {
  title: PropTypes.string,
  parraf: PropTypes.string,
  handleClick: PropTypes.func,
  value: PropTypes.string,
};
