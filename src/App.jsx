import { Provider } from "react-redux";

import "./App.css";
import { listProducts } from "./Products/actions";
import { ProductList } from "./Products/index";
import { store } from "./config/store";
import { ShoppingCart } from "./ShoppingCart";

store.dispatch(listProducts());

function App() {
  return (
    <Provider store={store}>
      <ProductList />
      <ShoppingCart />
    </Provider>
  );
}

export default App;
