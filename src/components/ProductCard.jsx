function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <span className="product-category">{category}</span>
      <h3 className="product-title">{title}</h3>
      <p className="product-price">Rs. {price}</p>
    </div>
  );
}

export default ProductCard;
