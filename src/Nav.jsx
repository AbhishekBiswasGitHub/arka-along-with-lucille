import NavItem from "./NavItem";

import "./Nav.css";

const Nav = () => {
  const navItems = [
    {
      icon: "instagram",
      color: "#c13584",
      link: "#",
    },
    {
      icon: "facebook",
      color: "#4267b2",
      link: "#",
    },
    {
      icon: "youtube",
      color: "#ff0000",
      link: "#",
    },
  ];
  return (
    <nav id="nav">
      <ul id="nav-items">
        {navItems.map(({ icon, color, link }) => (
          <NavItem
            key={icon}
            icon={icon}
            color={color}
            link={link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
