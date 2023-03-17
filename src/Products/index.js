import { connect } from "react-redux";
import { ProductList } from "./components/ProductList";
import { addToCart } from "./actions";


const mapStateToProps = (state) => {
  const products = Object.values(state.products)

  return {
    products
  }
}

const ProductListConnected = connect(mapStateToProps, { onAddToCartClicked: addToCart })(ProductList)

export { ProductListConnected as ProductList }