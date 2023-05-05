import FooterNavLinks from "./FooterNavLinks";
import "./FooterNav.css";

export default function FooterNav({ footerNavData }) {
  const { navs } = footerNavData;

  const footerNavItems = navs.map(item => (
    <div key={item.id} className="footerNavItem">
      <h4 className="footerNavTitle">{item.title}</h4>
      <FooterNavLinks links={item.links} />
    </div>
  ));

  return <div className="footerNav">{footerNavItems}</div>;
}
