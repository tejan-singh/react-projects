// here state is a state before component update
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    let newList = state.cart.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });
    return { ...state, cart: newList };
  }

  if (action.type === "INCREASE") {
    let newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }

      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    let newCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      //chaining filter with map method -> to remove item when amount is less then 0
      .filter((cartItem) => {
        return cartItem.amount !== 0;
      });

    return { ...state, cart: newCart };
  }

  return state;
};

export default reducer;
