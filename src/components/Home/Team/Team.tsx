import { FC } from "react";
import "./Team.scss";

// Icons
import { Mouse } from "@mui/icons-material";

// Images
import profile1 from "../../../assets/profile-1.jpg";
import profile2 from "../../../assets/profile-2.jpg";

export const Team: FC = () => {
  return (
    <section className="Team">
      <div className="Team__wrapper">
        <div className="Team__member">
          <div className="Team__member__img">
            <div className="Team__member__img__overlay">
              <Mouse />
              <span>Hover to learn more</span>
            </div>
            <img src={profile1} alt="" />
          </div>
          <div className="Team__member__content">
            <span>Person Heredia</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              officiis obcaecati animi tenetur esse! Blanditiis vitae saepe at
              inventore. Eos ad harum molestiae?
            </p>
          </div>
        </div>
        <div className="Team__member">
          <div className="Team__member__img">
            <div className="Team__member__img__overlay">
              <Mouse />
              <span>Hover to learn more</span>
            </div>
            <img src={profile2} alt="" />
          </div>
          <div className="Team__member__content">
            <span>Person Hernandez</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
              rerum tenetur? Placeat natus inventore, libero quibusdam laborum
              ducimus eaque? Commodi beatae perspiciatis nesciunt necessitatibus
              sapiente neque, voluptates, itaque asperiores ullam repellat
              reiciendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
