import { FC, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

// Images
import logo from "../../assets/logo-hh-frameless.svg";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

// Components
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ContactBar } from "../ContactBar/ContactBar";

export const Navbar: FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
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
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </div>
  );
};
