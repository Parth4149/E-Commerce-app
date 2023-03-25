import "./book.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Price, Rating } from "..";

const Book = ({ book }) => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const [img, setImg] = useState();
  // When we switch routes don't set image to unmounted component
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    // image.onload = () => {
    mountedRef.current = setTimeout(() => {
      setImg(image);
    }, 300);
    // };
    return () => {
      // when the component unmounts // cleanup
      clearInterval(mountedRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="book">
      <div className="book__inner">
        {img ? (
          <>
            <Link to={`/books/${book.id}`}>
              <figure
                className="book__img--wrapper"
                onClick={() => topFunction()}
              >
                <img src={img.src} alt="" className="book__img" />
              </figure>
            </Link>
            <footer style={{ paddingLeft: "5px" }}>
              <div className="book__title" onClick={() => topFunction()}>
                <Link to={`/books/${book.id}`} className="book__title--link">
                  {book.title}
                </Link>
              </div>

              <Rating rating={book.rating} />
              <Price
                salePrice={book.salePrice}
                originalPrice={book.originalPrice}
              />
            </footer>
          </>
        ) : (
          <>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Book;
