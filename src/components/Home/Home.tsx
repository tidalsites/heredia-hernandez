import { FC } from "react";
import "./Home.scss";

// Component Sections
import { Quote } from "./Quote/Quote";
import { Team } from "./Team/Team";
import { Firm } from "./About/Firm";
import { PracticeAreasSection } from "./PracticeAreas/PracticeAreasSection";

export const Home: FC = () => {
  return (
    <div className="Home">
      <section className="Home__splash">
        <div className="Home__splash__text">
          <h1>Legal Services you can trust</h1>
          <p>Don't wait until it is too late!</p>
          <div className="Home__splash__buttons">
            <button className="cta btn-gold">Call Now</button>
            <button className="cta btn-white">Book Appointment</button>
          </div>
        </div>
      </section>
      <Firm />
      <Team />
      <Quote />
      <PracticeAreasSection />
    </div>
  );
};
