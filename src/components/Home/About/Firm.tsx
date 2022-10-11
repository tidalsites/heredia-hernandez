import { FC } from "react";
import "./Firm.scss";
import { Link } from "react-router-dom";

export const Firm: FC = () => {
  return (
    <section className="Firm">
      <div className="Firm__wrapper">
        <span className="section-header">Our Firm</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          hic incidunt nesciunt, architecto sed veritatis. Ipsa cum neque
          praesentium asperiores quas optio mollitia ab pariatur fuga minus
          veniam, magnam fugit debitis voluptates assumenda error nobis
          reiciendis quasi? Expedita, error nesciunt quidem quo nisi quasi.
        </p>
        <Link className="cta btn-blue" to="/about">
          Learn more
        </Link>
      </div>
    </section>
  );
};
