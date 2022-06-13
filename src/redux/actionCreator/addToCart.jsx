import { addToCartString, resetCartString } from "./actionString";

export const addToCartAction = (size, delivery, id) => ({
    type: addToCartString,
    productId: id,
    size: size,
    delivery: delivery 
})

export const resetCartAction = () => ({
    type: resetCartString
})