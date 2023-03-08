import'./style.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getNoteValue } from './store/actions';

const AddNewNote = () => {
  const [notesName, setNotesName] = useState("");
  const dispatch = useDispatch()


  const handleOnChange = (event) => {
    const {value} = event.target;
    setNotesName(value)
  };


  //usedispatch method
  const handleClick = () =>{
    dispatch( getNoteValue()) 
  }


  return (
    <div className="add-new-note-wrapper">
      <h1>Add New Note</h1>
      <div className="form-wrapper">
        <input
          name="addTodo"
          placeholder="Enter Todo Name"
          onChange={handleOnChange}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </div>
  );
};

export default AddNewNote;
