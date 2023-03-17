import { createStore, combineReducers } from "redux";
import { productsReducer } from "../Products/reducers";
import { shoppingCartReducer } from "../ShoppingCart/reducers";


export const store = createStore(combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer
}))

// New way with reduxjs/toolkit
// export const store = configureStore(combineReducers({ products: productsReducer }))