import { combineReducers } from "redux";
import addToCartReducer from "./addToCart";

import counterReducers from "./counter";
import loginReducer from "./login";
import searchProductReducer from "./searchProduct";

const reducers = combineReducers({
    counter: counterReducers,
    auth: loginReducer,
    searchProduct: searchProductReducer,
    addToCart: addToCartReducer
});

export default reducers