import { FC } from "react";
import "./Home.scss";
import { Quote } from "./Quote/Quote";
import { Team } from "./Team/Team";

export const Home: FC = () => {
  return (
    <div className="Home">
      <section className="Home__splash">
        <div className="Home__splash__text">
          <h1>Legal Services you can trust</h1>
          <p>Don't wait until it is too late!</p>
          <div className="Home__splash__buttons">
            <button>Call Now</button>
            <button>Book Appointment</button>
          </div>
        </div>
      </section>
      <Team />
      <Quote />
    </div>
  );
};
