import PropTypes from "prop-types";

function Product({ data, onAddToCartClicked }) {
  return (
    <>
      <div>
        {data.title} - {data.price} €
        {data.inventory ? `x ${data.inventory}` : null}
      </div>
      <button onClick={() => onAddToCartClicked()}>Add to cart</button>
    </>
  );
}

export function ProductList({ products, onAddToCartClicked }) {
  return (
    <>
      <h3>Products</h3>
      {products.map((product) => (
        <Product
          key={product.id}
          data={product}
          onAddToCartClicked={() => onAddToCartClicked(product)}
        />
      ))}
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};
