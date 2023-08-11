import SkillCategory from "./SkillCategory";

import "./Skills.css";

const Skills = () => {
  const SkillCategories = [
    {
      name: "instrument",
      icon: "guitar",
      skills: [
        "lead guitar",
        "rhythm guitar",
        "bass guitar",
      ],
    },
    {
      name: "software",
      icon: "microchip",
      skills: ["FL studio", "cubase"],
    },
    {
      name: "production",
      icon: "layer-group",
      skills: [
        "composition",
        "arrangement & mixing",
      ],
    },
  ];

  return (
    <section id="skills-container">
      <h2 id="skills-heading">
        <i className="fa-solid fa-screwdriver-wrench"></i>
        skills
      </h2>
      <div id="skill-categories">
        {SkillCategories.map(
          ({ name, icon, skills }) => (
            <SkillCategory
              key={name}
              name={name}
              icon={icon}
              skills={skills}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
