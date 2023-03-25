import { Link } from "react-router-dom";

const Explore = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div>
      <section id="explore" className="section">
        <div className="row row__column">
          <h2 className="section__title">
            Explore more <span className="primary-color">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn btn--primary" onClick={() => topFunction()}>
              Explore Books
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Explore;
