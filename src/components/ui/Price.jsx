const Price = ({ salePrice, originalPrice }) => (
  <div className="book__price">
    {salePrice ? (
      <>
        <span className="book__price--sale">${salePrice.toFixed(2)}</span>
        <span className="book__price--normal">${originalPrice.toFixed(2)}</span>
      </>
    ) : (
      <>${originalPrice.toFixed(2)}</>
    )}
  </div>
);

export default Price;
