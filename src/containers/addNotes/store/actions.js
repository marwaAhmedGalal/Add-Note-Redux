//action is  simpaly a javascript function
//type: mandatory
//additional parameter that you can pass to that particular action

import { GET_NOTES_VALUE } from "./actionTypes";

export function getNoteValue(noteValue) {
  console.log(noteValue);
  return {
    type: GET_NOTES_VALUE,
    noteValue,
  };
}
