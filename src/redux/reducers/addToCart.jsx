import { addToCartString } from "../actionCreator/actionString";

const initialState = {
    productId: "",
    size: "",
    delivery: ""
}

const addToCartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case addToCartString:
            return { ...prevState, size: action.size, delivery: action.delivery, productId: action.productId}

        default:
            return { ...prevState }
    }
}

export default addToCartReducer