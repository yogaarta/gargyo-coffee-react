import { combineReducers } from "redux";
import addToCartReducer from "./addToCart";

import counterReducers from "./counter";
import authReducer from "./auth";
import searchProductReducer from "./searchProduct";

const reducers = combineReducers({
    counter: counterReducers,
    auth: authReducer,
    searchProduct: searchProductReducer,
    addToCart: addToCartReducer
});

export default reducers