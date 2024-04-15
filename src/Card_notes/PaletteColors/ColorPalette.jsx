import "./ColorPalette.css";

const ColorPalette = ({ selectedColor, setSelectedColor }) => {
  const colors = [
    "#A7FFEB",
    "#CCFF90",
    "#F28B82",
    "#FBBC04",
    "#FFF475",
    "#FFFFFF",
    "#AECBFA",
    "#CBF0F8",
    "#D7AEFB",
    "#FDCFE8",
  ];

  return (
    <div className="palette-colors__ten-colors">
      {colors.map((color, index) => (
        <div
          key={index}
          className="palette-colors__color-box"
          style={{ backgroundColor: color }}
          onClick={() => {
            setSelectedColor(color);
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
