import PropTypes from "prop-types";

import "./AchievementWork.css";

const AchievementWork = ({
  details,
  artists,
}) => {
  return (
    <li className="achievement-work">
      <div className="achievement-work-details">
        {details}
      </div>
      {artists.length && (
        <ul className="achievement-work-artists">
          {artists.map((artist, index) => (
            <li
              key={index}
              className="achievement-work-artist"
            >
              {artist}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

AchievementWork.propTypes = {
  details: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
};

export default AchievementWork;
