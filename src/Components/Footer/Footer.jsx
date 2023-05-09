import { nanoid } from "nanoid";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import FooterNav from "./FooterNav";
import SnsLinks from "./SnsLinks";

import "./Footer.css";

export default function Footer() {
  const footerNavData = {
    navs: [
      {
        id: nanoid(),
        title: "Features",
        links: [
          { id: nanoid(), linkName: "Link Shortening", link: "/" },
          { id: nanoid(), linkName: "Branded Links", link: "/" },
          { id: nanoid(), linkName: "Analytics", link: "/" },
        ],
      },
      {
        id: nanoid(),
        title: "Resources",
        links: [
          { id: nanoid(), linkName: "Blog", link: "/" },
          { id: nanoid(), linkName: "Developers", link: "/" },
          { id: nanoid(), linkName: "Support", link: "/" },
        ],
      },
      {
        id: nanoid(),
        title: "Company",
        links: [
          { id: nanoid(), linkName: "About", link: "/" },
          { id: nanoid(), linkName: "Our Team", link: "/" },
          { id: nanoid(), linkName: "Careers", link: "/" },
          { id: nanoid(), linkName: "Contact", link: "/" },
        ],
      },
    ],
  };

  return (
    <footer className="footer">
      <div className="footerBox">
        <div className="footerLogoBox">
          <Logo className="footerLogo" />
        </div>
        <FooterNav footerNavData={footerNavData} />
        <SnsLinks />
      </div>
    </footer>
  );
}
