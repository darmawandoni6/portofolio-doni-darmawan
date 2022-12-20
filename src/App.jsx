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
  return (
    <>
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
        <i class="fa-brands fa-whatsapp"></i>
      </div>
    </>
  );
};

export default App;
