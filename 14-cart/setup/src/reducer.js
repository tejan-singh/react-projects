// here state is a state before component update
const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: []}
    }

    if(action.type === 'REMOVE_ITEM'){
        let newList = state.cart.filter((cartItem) => {return (cartItem.id !== action.payload)})
        return {...state, cart:newList}
    }

    return state
}

export default reducer