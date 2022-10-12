import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import "./MobileMenu.scss";

// Icons
import CloseIcon from "@mui/icons-material/Close";
// import { LangToggle } from "../LangToggle/LangToggle";

// State
import { LangContext } from "../../state/context/Lang";

interface IMobileMenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ setMobileMenu }) => {
  const { lang } = useContext(LangContext);

  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="MobileMenu">
      <div className="MobileMenu__wrapper">
        <div className="MobileMenu__close">
          {/* <LangToggle alt={true} /> */}
          <button aria-label="Close mobile menu" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <nav id="mobile_navigation">
          <ul className="MobileMenu__list">
            <li>
              <a onClick={closeMenu} href="#">
                {lang == "es" ? "Inicio" : "Home"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#About">
                {lang == "es" ? "Nosotros" : "About"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Services">
                {lang == "es" ? "Areas de Servicios" : "Practice Areas"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Footer">
                {lang == "es" ? "Contacto" : "Contact"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
