import "./books.css";
import { useState } from "react";
import { Book } from "../../components/ui";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);
  function filterBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (filter === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }
  return (
    <main id="books__main">
      <div className="books__container ">
        <div className="row">
          <header className="books__header">
            <h3 className="books__header--title">All Books</h3>
            <select
              onChange={(e) => filterBooks(e.target.value)}
              id="filter"
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT">Sort</option>
              <option value="LOW_TO_HIGH">Price, Low to High</option>
              <option value="HIGH_TO_LOW">Price, High to Low</option>
              <option value="RATING">Rating</option>
            </select>
          </header>
          <div className="books">
            {books.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
