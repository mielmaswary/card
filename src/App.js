import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Interests from "./components/Interests";
import Socials from "./components/Socials";
import Pdf from "./components/Pdf";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Contact />
      <About />
      <Interests />
      <Socials />
      {/* <Pdf /> */}
    </div>
  );
};

export default App;
