import { FC } from "react";
import "./About.scss";

export const About: FC = () => {
  return (
    <div className="About">
      <div className="About__header">{/* <h1>About Page</h1> */}</div>
      <div className="About__content">
        <span className="section-header">Nosotros</span>
        <div className="About__content__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            architecto tempora minus esse itaque. Harum iure porro magnam
            eveniet assumenda ex. Natus commodi magni consectetur?
          </p>
          <p>
            Maxime ut magnam, consectetur labore quod corporis enim esse fuga
            fugit itaque laboriosam libero est a voluptas nihil nostrum
            consequuntur hic! Nam, voluptatem. Aut, nulla?
          </p>
          <p>
            Aspernatur adipisci sapiente minima est sequi recusandae neque
            provident sit voluptatibus obcaecati ea autem tempora iusto earum
            illo facilis eum voluptates laboriosam, inventore laborum cumque!
          </p>
        </div>
      </div>
    </div>
  );
};
