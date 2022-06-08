import { combineReducers } from "redux";

import counterReducers from "./counter";

const reducers = combineReducers({
    counter: counterReducers,
});

export default reducers