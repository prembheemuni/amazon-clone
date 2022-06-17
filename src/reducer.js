export const initialiState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>{
  let res = basket?.reduce((amount, item) => item.price + amount, 0);
  res = Math.round(res,1);
  return res;
}
  

export const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((each) => each.id === action.id);

      const newBasket = [...state.basket];
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
