import { FC } from "react";
import "./Quote.scss";

export const Quote: FC = () => {
  return (
    <section className="Quote">
      <div className="Quote__wrapper">
        <blockquote>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          consequuntur asperiores deserunt est.
        </blockquote>
      </div>
    </section>
  );
};
