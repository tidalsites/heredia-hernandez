import { FC } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__section">
          <div className="Footer__section__header">Links</div>
          <div className="Footer__section__content">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Service Areas</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="Footer__section">
          <div className="Footer__section__header">Hours</div>
          <div className="Footer__section__content">
            <ul>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
              <li>
                <span>Monday</span>
                <span>9am - 4pm</span>
              </li>
              <li>
                <span>Tuesday</span>
                <span>9am - 4pm</span>
              </li>
              <li>
                <span>Wednesday</span>
                <span>9am - 4pm</span>
              </li>
              <li>
                <span>Thursday</span>
                <span>9am - 4pm</span>
              </li>
              <li>
                <span>Friday</span>
                <span>9am - 4pm</span>
              </li>
              <li>
                <div>Saturday</div>
                <div>Closed</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__section">
          <div className="Footer__section__header">Locations</div>
          <div className="Footer__section__content">Santo Domingo</div>
        </div>
        <div className="Footer__bottom">
          <div className="Footer__bottom__copyright">
            <span>&copy; Heredia-Hernandez 2022</span>
          </div>
          <div className="Footer__bottom__plug">
            <a href="https://www.tidalsites.com">Created by Tidal Sites</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
