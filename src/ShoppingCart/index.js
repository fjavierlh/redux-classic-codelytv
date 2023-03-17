import { connect } from "react-redux";
import { ShoppingCart } from "./components/ShoppingCart";


function mapStateToProps(state) {
  const products = state.products;
  const productsInCart = Object.entries(state.shoppingCart.products)

  return {
    products: productsInCart.map(([key, value]) => {
      const product = products[key];
      product.quantity = value;

      return product;
    })
  }
}

const ShoppingCartConnected = connect(mapStateToProps, {onCheckoutClicked: () => 0})(ShoppingCart)

export { ShoppingCartConnected as ShoppingCart }