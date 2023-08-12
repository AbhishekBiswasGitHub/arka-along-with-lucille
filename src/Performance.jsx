import PropTypes from "prop-types";

import "./Performance.css";

const Performance = ({
  role,
  period,
  artist,
}) => {
  return (
    <div className="performance">
      <div className="performance-role">
        {role}{" "}
      </div>
      <div className="performance-period">
        {period.from} - {period.to}
      </div>
      <div className="performance-artist">
        {artist.name}
      </div>
      <div className="performance-artist-details">
        {artist.details}
      </div>
    </div>
  );
};

Performance.propTypes = {
  role: PropTypes.string.isRequired,
  period: PropTypes.object.isRequired,
  artist: PropTypes.object.isRequired,
};

export default Performance;
