import PropTypes from "prop-types";

import "./Achievement.css";
import AchievementWork from "./AchievementWork";

const Achievement = ({ title, role, works }) => {
  return (
    <div className="achievement">
      <div className="achievement-title">
        {title}
      </div>
      <div className="achievement-role">
        As {role}
      </div>
      <ul className="achievement-works">
        {works.map(
          ({ details, artists }, index) => (
            <AchievementWork
              key={index}
              details={details}
              artists={artists}
            />
          )
        )}
      </ul>
    </div>
  );
};

Achievement.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  works: PropTypes.array.isRequired,
};

export default Achievement;
