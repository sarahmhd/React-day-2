import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg align-items-center py-3 text-capitalize">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Noon
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/counter">
              Counter
            </Link>
            <Link className="nav-link" to="/users">
              Users
            </Link>
            <Link className="nav-link" to="/day1">
              day1
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
