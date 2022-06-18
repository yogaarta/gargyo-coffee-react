import { addToCartString, resetCartString } from "../actionCreator/actionString";

const initialState = {
    productId: "",
    productName: "",
    productPict: "",
    size: "",
    delivery: ""
}

const addToCartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case addToCartString:
            return { ...prevState, size: action.size, delivery: action.delivery, productId: action.productId, productName: action.productName, productPict: action.productPict}
        case resetCartString:
            return {...initialState}
        default:
            return { ...prevState }
    }
}

export default addToCartReducer