import PropTypes from "prop-types";

import "./HeroContent.css";

const HeroContent = ({
  heading,
  subHeading,
  intro,
}) => {
  return (
    <div id="hero-content">
      <div id="hero-headings">
        <h1 id="hero-heading">{heading}</h1>
        <h2 id="hero-sub-heading">
          {subHeading}
        </h2>
      </div>
      <p id="hero-intro">{intro}</p>
    </div>
  );
};

HeroContent.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

export default HeroContent;
