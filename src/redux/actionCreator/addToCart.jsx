import { addToCartString } from "./actionString";

export const addToCartAction = (size, delivery, id) => ({
    type: addToCartString,
    productId: id,
    size: size,
    delivery: delivery 
})