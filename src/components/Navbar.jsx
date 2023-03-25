import { useState, useEffect } from "react";
import LibraryLogo from "../assets/Library.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = ({ numberOfItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 480px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  function openMenu() {
    setIsOpen(true);
  }
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          {!isMobile && (
            <>
              <li className="nav__list">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/books" className="nav__link">
                  Books
                </Link>
              </li>
            </>
          )}
          {isMobile && (
            <button onClick={openMenu} className="btn__menu">
              <FiMenu />
            </button>
          )}
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FaShoppingCart />
            </Link>
            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>

        {isOpen && <Backdrop closeMenu={closeMenu} />}
      </div>
    </nav>
  );
};

function Backdrop({ closeMenu }) {
  return (
    <div className="menu__backdrop ">
      <button onClick={closeMenu} className="btn__menu btn__menu--close">
        <AiFillCloseCircle />
      </button>
      <ul className="menu__links">
        <li className="menu__list">
          <Link to="/" className="menu__link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="menu__list">
          <Link to="/books" className="menu__link" onClick={closeMenu}>
            Books
          </Link>
        </li>
        <li className="menu__list">
          <Link to="/cart" className="menu__link" onClick={closeMenu}>
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
