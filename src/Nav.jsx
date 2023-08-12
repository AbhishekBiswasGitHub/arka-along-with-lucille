import NavItem from "./NavItem";

import "./Nav.css";

const Nav = () => {
  const navItems = [
    {
      icon: "instagram",
      color: "#c13584",
      link: "https://instagram.com/arka_along_with_lucille",
    },
    {
      icon: "facebook",
      color: "#4267b2",
      link: "https://facebook.com/ArkaalongwithLucille",
    },
    {
      icon: "youtube",
      color: "#ff0000",
      link: "https://youtube.com/@ArkaalongwithLucille",
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
