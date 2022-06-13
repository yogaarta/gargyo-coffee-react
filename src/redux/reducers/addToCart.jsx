import { addToCartString, resetCartString } from "../actionCreator/actionString";

const initialState = {
    productId: "",
    size: "",
    delivery: ""
}

const addToCartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case addToCartString:
            return { ...prevState, size: action.size, delivery: action.delivery, productId: action.productId}
        case resetCartString:
            return {...initialState}
        default:
            return { ...prevState }
    }
}

export default addToCartReducer