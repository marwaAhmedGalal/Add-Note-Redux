import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetListData } from "./store/actions";

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isNotesDataFetching } = useSelector(
    (state) => state.NoteListReducer
  );
  console.log(notesList, isNotesDataFetching);

  useEffect(() => {
    dispatch(initGetListData());
  }, [dispatch]);

  if (isNotesDataFetching) {
    return <div>notes data is loading! please wait</div>;
  }
  return (
    <div className="notes-list-wrapper">
      <h1>Notes List</h1>
      <ul>
        {notesList &&
          notesList.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default NotesList;
