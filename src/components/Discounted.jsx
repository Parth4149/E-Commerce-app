import { books } from "../data";
import { Book } from "./ui";

const Discounted = () => (
  <section className="section">
    <div className="row">
      <h2 className="section__title">
        Discounted <span className="primary-color">Books</span>
      </h2>
      <div className="books">
        {books
          .filter((book) => book.salePrice > 0)
          .slice(0, 8)
          .map((book) => (
            <Book book={book} key={book.id} />
          ))}
      </div>
    </div>
  </section>
);

export default Discounted;
