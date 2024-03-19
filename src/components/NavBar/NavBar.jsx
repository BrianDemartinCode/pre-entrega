import { colors } from "@mui/material";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./img/logo.png" width={80} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link a-color" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-color" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-color" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link a-color" href="">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
