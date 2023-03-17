import { RECEIVE_PRODUCTS } from "../constants";

const initialState = [];

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const result = action.products.reduce((result, product) => {
        result[product.id] = product;

        return result
      }, {})

      return result;

    default:
      return state;
  }
}