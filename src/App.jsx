import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Certifications from "./components/Certifications";
import Portofolio from "./components/Portofolio";

const App = () => {
  const handleScroll = (e) => {
    const { scrollTop } = e.target;

    const about = document.getElementById("about");
    const experience = document.getElementById("experience");
    const education = document.getElementById("education");
    const skills = document.getElementById("skills");
    const interests = document.getElementById("interests");
    const certifications = document.getElementById("certifications");

    const vhexperience = about.clientHeight;
    const vheducation = vhexperience + experience.clientHeight;
    const vhskills = vheducation + education.clientHeight;
    const vhinterests = vhskills + skills.clientHeight;
    const vhcertifications = vhinterests + interests.clientHeight;
    const vhportofolio = vhcertifications + certifications.clientHeight;

    const section = document.querySelectorAll(".nav-link.js-scroll-trigger");

    section.forEach((item) => {
      item.classList.remove("active");
    });

    if (scrollTop >= vhportofolio) {
      section[6].classList.add("active");
    } else if (scrollTop >= vhcertifications) {
      section[5].classList.add("active");
    } else if (scrollTop >= vhinterests) {
      section[4].classList.add("active");
    } else if (scrollTop >= vhskills) {
      section[3].classList.add("active");
    } else if (scrollTop >= vheducation) {
      section[2].classList.add("active");
    } else if (scrollTop >= vhexperience) {
      section[1].classList.add("active");
    } else if (scrollTop >= 0) {
      section[0].classList.add("active");
    }
  };

  return (
    <div className="main-page" onScroll={handleScroll}>
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Certifications />
        <hr className="m-0" />
        <Portofolio />
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          position: "fixed",
          bottom: 20,
          right: 15,
          backgroundColor: "#25d366",
          color: "white",
          height: 55,
          width: 55,
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "2.5rem",
        }}
        onClick={() => window.open("https://wa.me/6285761298781", "__blank")}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </div>
  );
};

export default App;
