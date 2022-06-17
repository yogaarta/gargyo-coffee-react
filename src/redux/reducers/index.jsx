import { combineReducers } from "redux";
import addToCartReducer from "./addToCart";

import counterReducers from "./counter";
import authReducer from "./auth";
import searchProductReducer from "./searchProduct";
import { getUserDataReducer } from "./userData";

const reducers = combineReducers({
    counter: counterReducers,
    auth: authReducer,
    searchProduct: searchProductReducer,
    addToCart: addToCartReducer,
    userData: getUserDataReducer,
});

export default reducers