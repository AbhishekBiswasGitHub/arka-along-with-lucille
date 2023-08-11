import PropTypes from "prop-types";

import "./SkillCategory.css";

const SkillCategory = ({
  name,
  icon,
  skills,
}) => {
  return (
    <div className="skill-category">
      <h3 className="skill-category-name">
        <i className={`fa-solid fa-${icon}`}></i>
        {name}
      </h3>
      <ul className="skills">
        {skills.map((skill) => (
          <li
            key={skill}
            className="skill"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

SkillCategory.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default SkillCategory;
