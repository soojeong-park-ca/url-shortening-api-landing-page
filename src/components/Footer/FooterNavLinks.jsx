import "./FooterNavLinks.css";

export default function FooterNavLinks({ links }) {
  const footerNavLinks = links.map(link => (
    <li key={link.id} className="navListItem">
      <a href={link.link} className="navLink">
        {link.linkName}
      </a>
    </li>
  ));

  return <ul className="navList">{footerNavLinks}</ul>;
}
