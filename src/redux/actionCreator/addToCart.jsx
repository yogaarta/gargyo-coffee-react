import { addToCartString, resetCartString } from "./actionString";

export const addToCartAction = (size, delivery, id, name, pict) => ({
    type: addToCartString,
    productId: id,
    productName: name,
    productPict: pict,
    size,
    delivery 
})

export const resetCartAction = () => ({
    type: resetCartString
})