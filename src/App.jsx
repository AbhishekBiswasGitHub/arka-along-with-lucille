import Hero from "./Hero";
import Skills from "./Skills";
import Live from "./Live";
import Achievements from "./Achievements";

import "./App.css";
import Contacts from "./Contacts";

const App = () => {
  return (
    <div id="App">
      <Hero />
      <Skills />
      <Live />
      <Achievements />
      <Contacts />
    </div>
  );
};

export default App;
