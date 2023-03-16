//action is  simpaly a javascript function
//type: mandatory
//additional parameter that you can pass to that particular action

import {
  INIT_SAVE_NOTES_VALUE,
  SAVE_NOTES_VALUE_SUCCESSFULL,
  SAVE_NOTES_VALUE_FAILED,
} from "./actionTypes";

export function initSaveNotesValue(noteValue) {
  console.log(noteValue);
  return {
    type: INIT_SAVE_NOTES_VALUE,
    noteValue,
  };
}

export function initSaveNotesValueSuccessfull(success) {
  console.log(success);
  return {
    type: SAVE_NOTES_VALUE_SUCCESSFULL,
    success,
  };
}

export function initSaveNotesValueFailed(failed) {
  // console.log(failed);
  return {
    type: SAVE_NOTES_VALUE_FAILED,
    failed,
  };
}
