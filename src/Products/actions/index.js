import { ADD_TO_CART, RECEIVE_PRODUCTS } from "../constants";
import { retrieveProducts } from "../repositories/ProductRepository";

export function listProducts() {
  const products = retrieveProducts();

  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  }
}