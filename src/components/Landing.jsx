import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => (
  <section id="landing" className="section">
    <div className="section-center">
      <div className="header__description">
        <h1>most awarded online library platform</h1>
        <h2>
          Find your dream book with{" "}
          <span className="primary-color">Library</span>
        </h2>
        <a href="#features">
          <button className="btn btn--primary">Browse books</button>
        </a>
      </div>
      <figure className="header__img--wrapper">
        <img src={UndrawBooks} alt="Books" />
      </figure>
    </div>
  </section>
);

export default Landing;
