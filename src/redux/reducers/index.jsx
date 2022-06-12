import { combineReducers } from "redux";
import addToCartReducer from "./addToCart";

import counterReducers from "./counter";
import authReducer from "./auth";
import searchProductReducer from "./searchProduct";
import { getUserDataReducer } from "./userData";
import headerReducer from "./header";

const reducers = combineReducers({
    counter: counterReducers,
    auth: authReducer,
    searchProduct: searchProductReducer,
    addToCart: addToCartReducer,
    userData: getUserDataReducer,
    header: headerReducer
});

export default reducers