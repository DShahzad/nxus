import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="warning"
      >
        <div className="container-fluid ">
          <Link to={"/"} className="navbar-brand">
            NEXUS | BERRY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Link to={'/cart'}>
            <button className="btn btn-info mx-2">GO TO CART</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
