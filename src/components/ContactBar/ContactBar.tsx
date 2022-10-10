import { FC } from "react";
import "./ContactBar.scss";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";

export const ContactBar: FC = () => {
  return (
    <div className="ContactBar">
      <div className="ContactBar__wrapper">
        <div className="ContactBar__smedia">
          <button>
            <Facebook />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Email />
          </button>
          <button>
            <Phone />
          </button>
        </div>
      </div>
    </div>
  );
};
