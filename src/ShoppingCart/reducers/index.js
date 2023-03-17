import { ADD_TO_CART } from "../constants";


const initialState = {
  products: {}
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const proudctId = action.product.id;
      let quantity = 0;

      if (state.products[proudctId]) {
        quantity = state.products[proudctId];
      }

      quantity++

      return {
        ...state,
        products: { ...state.products, [action.product.id]: quantity }
      };
    default:
      return state;
  }
}