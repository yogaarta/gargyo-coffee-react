import { addToCartString } from "./actionString";

export const addToCartAction = (size, delivery) => ({
    type: addToCartString,
    size: size,
    delivery: delivery 
})