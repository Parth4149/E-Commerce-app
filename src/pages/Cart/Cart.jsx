import "./cart.css";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/empty_cart.svg";

const Cart = ({ props }) => {
  const { cart, changeQuantity, removeItem } = props;
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += item.quantity * (item.salePrice || item.originalPrice);
    });
    return price;
  };

  return (
    <main id="books__main">
      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <h3 className="cart__title">Cart</h3>
          </div>
          <div className="cart">
            <div className="cart__header">
              <span className="cart__book">Book</span>
              <span className="cart__quantity">Quantity</span>
              <span className="cart__total">Price</span>
            </div>
            <div className="cart__body">
              {cart.map((book, index) => (
                <div className="cart__item" key={book.id}>
                  <div className="cart__book">
                    <img className="cart__book--img" src={book.url} alt="" />
                    <div className="cart__book--info">
                      <span className="cart__book--title">{book.title}</span>
                      <span className="cart__book--price">
                        ${(book.salePrice || book.originalPrice).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(book, index)}
                        className="cart__book--remove"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart__quantity">
                    <input
                      className="cart__input"
                      type="number"
                      min={0}
                      max={99}
                      value={book.quantity}
                      onChange={(e) => changeQuantity(book, e.target.value)}
                    />
                  </div>

                  <div className="cart__total">
                    $
                    {(
                      book.quantity * (book.salePrice || book.originalPrice)
                    ).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {cart.length === 0 && (
            <div className="cart__empty">
              <img className="cart__empty--img" src={EmptyCart} alt="" />
              <h3>You don&apos;t have any books in your cart!</h3>
              <Link to="/books">
                <button className="btn btn--primary">Browse books</button>
              </Link>
            </div>
          )}

          {cart.length > 0 && (
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${(total() * 0.9).toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
              <button
                onClick={() => alert(`You haven't select product`)}
                className="btn btn__checkout btn--primary"
              >
                Proceed to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
