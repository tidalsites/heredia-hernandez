import { FC } from "react";
import { Link } from "react-router-dom";
import "./PracticeAreasSection.scss";

export const PracticeAreasSection: FC = () => {
  return (
    <section className="PracticeAreasSection">
      <div className="PracticeAreasSection__wrapper">
        <span className="section-header">Practice Areas</span>
        <ul>
          <li>Real Estate</li>
          <li>Liability</li>
          <li>Marriage/Divorce</li>
          <li>lorem</li>
          <li>ipsum</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <Link className="btn-blue cta" to="/">
          Learn More
        </Link>
      </div>
    </section>
  );
};
