import { addToCartString, applyPromoString, resetCartString } from "../actionCreator/actionString";

const initialState = {
    productId: "",
    productName: "",
    productPict: "",
    size: "",
    delivery: "",
    promoId: "",
    promo: 0
}

const addToCartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case addToCartString:
            return { ...prevState, size: action.size, delivery: action.delivery, productId: action.productId, productName: action.productName, productPict: action.productPict }
        case applyPromoString:
            return { ...prevState, promoId: action.promoId, promo: action.promo}
        case resetCartString:
            return { ...initialState }
        default:
            return { ...prevState }
    }
}

export default addToCartReducer