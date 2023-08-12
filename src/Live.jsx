import "./Live.css";
import Performance from "./Performance";

const Live = () => {
  const performances = [
    {
      role: "lead guitarist",
      period: {
        from: "2011",
        to: "2015",
      },
      artist: {
        name: "LOSERZ",
        details: "Rap Rock Band",
      },
    },
    {
      role: "lead guitarist",
      period: {
        from: "2011",
        to: "2015",
      },
      artist: {
        name: "Creation",
        details: "Rock Band",
      },
    },
    {
      role: "bass guitarist",
      period: {
        from: "2015",
        to: "present",
      },
      artist: {
        name: "Crazy Petals",
        details: "Alt. Rock Band",
      },
    },
    {
      role: "lead guitarist",
      period: {
        from: "2015",
        to: "2018",
      },
      artist: {
        name: "Ochin",
        details: "Folk Band",
      },
    },
    {
      role: "bass guitarist",
      period: {
        from: "2018",
        to: "present",
      },
      artist: {
        name: "Anwesha Dutta",
        details: "Sa re ga ma pa 2014 champion",
      },
    },
    {
      role: "bass guitarist",
      period: {
        from: "2018",
        to: "present",
      },
      artist: {
        name: "Debjani Acharya",
        details: "Sa re ga ma pa Finalist",
      },
    },
    {
      role: "lead guitarist",
      period: {
        from: "2018",
        to: "present",
      },
      artist: {
        name: "Riddhiman Biswas",
        details: "Sa re ga ma pa Finalist",
      },
    },
  ];
  return (
    <section id="live-container">
      <h2 id="live-heading">
        <i className="fa-solid fa-microphone"></i>
        live on stage
      </h2>
      <div id="performances">
        {performances.map(
          ({ role, period, artist }) => (
            <Performance
              key={artist.name}
              role={role}
              period={period}
              artist={artist}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Live;
