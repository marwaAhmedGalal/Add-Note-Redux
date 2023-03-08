import "./App.css";
import Header from "./components";
import { Routes, Route } from "react-router-dom";
import NotesList from "./containers/notesList";
import AddNewNote from "./containers/addNotes/index";

function App() {
  return (
    <div className="App">
      {/*header Part*/}
      <Header />
      {/*header Part*/}

      {/*Page Content*/}
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/add-new-note" element={<AddNewNote />} />
      </Routes>
      {/*Page Content*/}
    </div>
  );
}

export default App;
