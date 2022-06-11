export const addToCart = (cart, size) => {
    const newCart = cart
    newCart.push({
        size
    })
}