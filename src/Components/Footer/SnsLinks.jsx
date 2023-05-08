import { ReactComponent as FacebookIcon } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icon-instagram.svg";

import "./SnsLinks.css";

export default function SnsLinks() {
  return (
    <div className="snsLinks">
      <div className="snsIconBox">
        <a className="snsLink" href="https://www.facebook.com" target="_blank">
          <FacebookIcon />
        </a>
      </div>
      <div className="snsIconBox">
        <a className="snsLink" href="https://www.twitter.com" target="_blank">
          <TwitterIcon />
        </a>
      </div>
      <div className="snsIconBox">
        <a className="snsLink" href="https://www.pinterest.com" target="_blank">
          <PinterestIcon />
        </a>
      </div>
      <div className="snsIconBox">
        <a className="snsLink" href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
