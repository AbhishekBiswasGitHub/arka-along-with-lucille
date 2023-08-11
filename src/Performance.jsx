import PropTypes from "prop-types";

import "./Performance.css";

const Performance = ({
  role,
  period,
  artist,
}) => {
  return (
    <div className="performance">
      <div className="role">{role} </div>
      <div className="period">
        {period.from} - {period.to}
      </div>
      <div className="artist">{artist.name}</div>
      <div className="artist-details">
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
