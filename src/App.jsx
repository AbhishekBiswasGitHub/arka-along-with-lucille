import Hero from "./Hero";
import Skills from "./Skills";
import Live from "./Live";
import Achievements from "./Achievements";
import Contacts from "./Contacts";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div id="App">
      <Hero />
      <Skills />
      <Live />
      <Achievements />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
