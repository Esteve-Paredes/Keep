import { useEffect } from "react";
import "./welcome.css";

export default function Welcome({
  username,
  setUsername,
  renderComp,
  setRenderComp,
}) {
  useEffect(() => {
    const storeUsername = localStorage.getItem("username");
    console.log("Store username:", storeUsername);
    if (storeUsername) {
      setUsername(storeUsername);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("username", username);
    setRenderComp(!renderComp);
  };

  return (
    <>
      <div className="welcome__container">
        <h1 className="welcome__title">Welcome to Codeable Keep</h1>
        <div className="welcome__section">
          <span className="welcome__username">username</span>
          <input
            className="welcome__input"
            type="text"
            name="username"
            placeholder="some-user"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            className="welcome__button"
            onClick={handleLogin}
            disabled={!username ? true : false}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}
