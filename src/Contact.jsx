import PropTypes from "prop-types";

import "./Contact.css";

const Contact = ({
  link,
  icon,
  iconColor,
  content,
}) => {
  return (
    <a
      className="contact"
      href={link}
      target={
        link && link.startsWith("https://")
          ? "_blank"
          : ""
      }
      rel={
        link && link.startsWith("https://")
          ? "noreferrer"
          : ""
      }
    >
      <i
        className={`${icon}`}
        style={{ color: iconColor }}
      ></i>
      {content}
    </a>
  );
};

Contact.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Contact;
