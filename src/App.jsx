import { useState } from "react";
import WithNotes from "./WithNotes/WithNotes.jsx";
import Welcome from "./Welcome/Welcome.jsx";
import "./App.css";

function App() {
  const [bolean, setBolean] = useState(true);
  const [username, setUsername] = useState("");
  const [renderComp, setRenderComp] = useState(true);
  const ENDPOINT = `https://codeable-keep-api-production.up.railway.app/api/${username}/notes`;

  return (
    <>
      {renderComp ? (
        <Welcome
          username={username}
          setUsername={setUsername}
          renderComp={renderComp}
          setRenderComp={setRenderComp}
        />
      ) : (
        <WithNotes
          bolean={bolean}
          setBolean={setBolean}
          renderComp={renderComp}
          setRenderComp={setRenderComp}
          username={username}
          endPoint={ENDPOINT}
        />
      )}
    </>
  );
}

export default App;
