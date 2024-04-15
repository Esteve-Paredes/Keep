import EmptyAside from "../Empty/EmptyAside.jsx";
import Form from "../form/Form.jsx";
import Header from "../Header/Header.jsx";

function WithNotes({
  bolean,
  setBolean,
  renderComp,
  setRenderComp,
  username,
  endPoint,
}) {
  return (
    <>
      <Header
        renderComp={renderComp}
        setRenderComp={setRenderComp}
        username={username}
      />
      <main className="App__main">
        <EmptyAside setBolean={setBolean} />
        <Form bolean={bolean} endPoint={endPoint} />
      </main>
    </>
  );
}

export default WithNotes;
