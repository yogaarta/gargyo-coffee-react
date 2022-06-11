import { addToCartString } from "../actionCreator/actionString";

const initialState = {
    size: "",
    delivery: ""
}

const addToCartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case addToCartString:
            return { ...prevState, size: action.size, delivery: action.delivery}

        default:
            return { ...prevState }
    }
}

export default addToCartReducer