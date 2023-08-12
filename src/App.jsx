import Hero from "./Hero";
import Skills from "./Skills";
import Live from "./Live";
import Achievements from "./Achievements";

import "./App.css";

const App = () => {
  return (
    <div id="App">
      <Hero />
      <Skills />
      <Live />
      <Achievements />
    </div>
  );
};

export default App;
