import { addToCartString, applyPromoString, resetCartString } from "./actionString";

export const addToCartAction = (size, delivery, id, name, pict) => ({
    type: addToCartString,
    productId: id,
    productName: name,
    productPict: pict,
    size,
    delivery 
})

export const applyPromoAction = (id, promo) => ({
    type: applyPromoString,
    promoId: id,
    promo,
})

export const resetCartAction = () => ({
    type: resetCartString
})