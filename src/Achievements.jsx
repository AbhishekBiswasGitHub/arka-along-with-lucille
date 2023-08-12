import Achievement from "./Achievement";
import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title:
        "International Collaboration (Europe & Africa)",
      role: "Music Producer",
      works: [
        {
          details:
            "Produced Track and played guitar as an Independent Music Producer for",
          artists: [
            "Emil Trzaskowski (Poland)",
            "Joel Complex (Germany)",
            "Gabriel Dave (Nigeria)",
          ],
        },
      ],
    },
    {
      title: "Radio & TV appearance",
      role: "Guitar Player",
      works: [
        {
          details:
            "Played live at Radio JU in 2013 with",
          artists: ["Looserz"],
        },
        {
          details:
            "Played multiple time at R plus and Aakash Aath with",
          artists: ["Crazy Petals"],
        },
      ],
    },
    {
      title: "Featured Works and Production",
      role: "Guitar Player and Music Producer",
      works: [
        {
          details:
            "Played Guitar at Gujarat and Mumbai with",
          artists: ["Vagabonds India Live"],
        },
        {
          details:
            "Produced Background music for",
          artists: [
            "an upcoming movie (Uranchu) of ESKAY MOVIES",
            "multiple Documentaries of WB Government",
          ],
        },
      ],
    },
  ];

  return (
    <div id="achievements-container">
      <h2 id="achievements-heading">
        <i className="fa-solid fa-trophy"></i>
        achievements
      </h2>
      <div id="achievements">
        {achievements.map(
          ({ title, role, works }, index) => (
            <Achievement
              key={index}
              title={title}
              role={role}
              works={works}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Achievements;
