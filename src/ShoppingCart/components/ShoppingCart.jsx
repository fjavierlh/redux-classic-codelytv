import PropTypes from "prop-types";

function ProductCart({ title, price, quantity }) {
  return (
    <div>
      {title} - {price} € {quantity ? `x ${quantity}` : null}
    </div>
  );
}

function computeTotalProducts(products) {
  return products.reduce((acc, { quantity, price }) => {
    const value = quantity * price;
    return acc + value;
  }, 0);
}

export function ShoppingCart({ products, onCheckoutClicked }) {
  const isEmpty = products.length === 0;
  return (
    <div>
      <h3>Shoping cart</h3>
      <div>
        {isEmpty && <em>Please, add some product to cart.</em>}
        {products.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
      <p>Total: {computeTotalProducts(products)}</p>
      <button onClick={onCheckoutClicked} disabled={isEmpty}>
        Checkout
      </button>
    </div>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCheckoutClicked: PropTypes.func.isRequired,
};
