import { FC } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-hh-frameless.svg";
import { ContactBar } from "../ContactBar/ContactBar";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar: FC = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__top">
        <ContactBar />
      </div>
      <div className="Navbar__wrapper">
        <div className="Navbar__logo">
          <img src={logo} alt="" />
        </div>
        <nav className="Navbar__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Service Areas</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="Navbar__menu">
          <button
            aria-label="Open mobile menu"
            // onClick={() => setMobileMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
