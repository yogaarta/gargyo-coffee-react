import { changePageString } from "./actionString";

export const headerAction = (page) => ({
  type: changePageString,
  payload: page
})