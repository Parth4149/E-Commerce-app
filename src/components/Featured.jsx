import { Book } from "./ui";
import { books } from "../data";

const Featured = () => (
  <section id="features" className="section">
    <div className="row">
      <h2 className="section__title">
        Featured <span className="primary-color">Books</span>
      </h2>
      <div className="books">
        {books
          .filter((book) => book.rating === 5)
          .slice(0, 4)
          .map((book) => (
            <Book book={book} key={book.id} />
          ))}
      </div>
    </div>
  </section>
);

export default Featured;
