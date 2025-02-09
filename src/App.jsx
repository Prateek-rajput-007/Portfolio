import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import SoftwareExperience from "./components/experience/SoftwareExperience"; // Import the new component
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scrollToTop/scroll";
import Education from "./components/education/Education";
import Project from "./components/project/Project";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Scroll />
      <About />
      <SoftwareExperience /> 
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default App;