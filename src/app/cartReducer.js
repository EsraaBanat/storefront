let initialState = {
    products: [],
    totalItems: 0
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case 'ADD_ITEM':
            let totalItems = state.totalItems + 1;
            // console.log(payload.displayName);
            state.products.push(payload);
            // console.log('state.products',state.products);
            // console.log({product});
            let state1 = {
                ...state,
                totalItems
            }
            // console.log(state1.products);
            return state1;
        case 'DELETE_ITEM':
            var deletedItem = state.products.indexOf(payload);
            // console.log({deletedItem});
             state.products.splice(deletedItem, 1);
            let total = state.totalItems - 1;
            let state2 = {
                ...state,
                totalItems: total
            }
            // console.log(state);
            // console.log(state2);
            return state2;
        default:
            return state;
    }
}


// //actions

// export const addIteamToCart = (product) => {
//     // console.log('product',product);
//     return {
//         type: 'ADD_ITEM',
//         payload: product
//     }
// }
// export const deleteItem = (product) => {
//     return {
//         type: 'DELETE_ITEM',
//         payload: product
//     }
// }