import "./Header.css";
import PropTypes from "prop-types";

export default function Header({ renderComp, setRenderComp, username }) {
  const handleClic = () => {
    setRenderComp(!renderComp);
  };

  return (
    <header className="header">
      <p className="header__content">
        Welcome to Codeable Keep <strong>{username}</strong>
      </p>
      <div className="header__nav">
        <button className="header__button" onClick={handleClic}>
          Exit
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  renderComp: PropTypes.bool,
  setRenderComp: PropTypes.func,
  username: PropTypes.string,
};
