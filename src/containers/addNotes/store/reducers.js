import { GET_NOTES_VALUE } from "./actionTypes";

const intialState = {
  flag: false,
};

const AddNotesReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_NOTES_VALUE:
      return {
        ...state,
        flag: true,
      };

    default:
      return state;
  }
};

export default AddNotesReducer;
