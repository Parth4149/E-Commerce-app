import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Books, BookInfo, Cart } from "./pages";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, { ...book, quantity: 1 }]);
  };

  const removeItem = (book) => {
    const updatedCart = cart.filter((item) => +item.id !== +book.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const numberOfItems = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  const changeQuantity = (book, quantity) => {
    setCart(
      cart.map((item) =>
        +item.id === +book.id ? { ...item, quantity: +quantity } : item
      ) // + convert str to number
    );
  };

  const getCartFromLocalStorage = () => {
    let localCart = localStorage.getItem("cart");
    if (localCart) {
      localCart = JSON.parse(localCart);
    } else {
      localCart = [];
    }
    // console.log("localCart", localCart);
    return localCart;
  };

  useEffect(() => {
    setCart(getCartFromLocalStorage);
  }, []);

  useEffect(() => {
    cart.length > 0 && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo props={{ books, addToCart, cart }} />}
          />
          <Route
            path="/cart"
            element={<Cart props={{ cart, changeQuantity, removeItem }} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
