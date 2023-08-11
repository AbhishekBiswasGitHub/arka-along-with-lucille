import Nav from "./Nav";

import "./Hero.css";
import HeroContent from "./HeroContent";

const Hero = () => {
  const { heading, subHeading, intro } = {
    heading: "arka das",
    subHeading: "guitar player / music producer",
    intro:
      "A musician with more than 10 years of experience of playing Live for various artists. Highly influenced by blues, country, folk and Rock. Currently playing for various artists and working as music producer for PKP production as well as independent Music Producer.",
  };
  return (
    <section id="hero">
      <Nav />
      <HeroContent
        heading={heading}
        subHeading={subHeading}
        intro={intro}
      />
    </section>
  );
};

export default Hero;
