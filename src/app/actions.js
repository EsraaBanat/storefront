//actions

export const addIteamToCart = (product) => {
    // console.log('product',product);
    return {
        type: 'ADD_ITEM',
        payload: product
    }
}
export const deleteItem = (product) => {
    return {
        type: 'DELETE_ITEM',
        payload: product
    }
}