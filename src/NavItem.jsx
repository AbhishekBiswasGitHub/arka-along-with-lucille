import PropTypes from "prop-types";

import "./NavItem.css";

const NavItem = ({ icon, color, link }) => {
  return (
    <li className="nav-item">
      <a
        href={link}
        target="_blank"
        style={{
          color: color,
        }}
        rel="noreferrer"
      >
        <i className={`fa-brands fa-${icon}`}></i>
      </a>
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavItem;
