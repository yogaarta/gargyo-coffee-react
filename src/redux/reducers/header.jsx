import { changePageString } from "../actionCreator/actionString";

const initialState = {
  pageActive: "home"
}

const headerReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case changePageString:
      return {...prevState, pageActive: action.payload};
    default:
      return prevState;
  }
}

export default headerReducer