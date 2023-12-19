import React from "react";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <div className="d-flex">
          <h1 className="mb-0">
            Doni
            <span className="text-primary">&nbsp;Darmawan </span>
          </h1>
          <button
            className="btn px-4"
            onClick={() =>
              window.open("/assets/CV-doni-darmawan.pdf", "_blank")
            }
          >
            <i className="fa-solid fa-download" />
          </button>
        </div>
        <div className="subheading mb-5">
          Medan, North Sumatra 20226 ·
          <a href="https://wa.me/6285761298781" target="_blank">
            &nbsp;085761298781&nbsp;
          </a>
          ·&nbsp;
          <a href="mailto:darmawandoni6@gmail.com">darmawandoni6@gmail.com</a>
        </div>
        <p className="lead mb-5">
          Hi, I'm a Full Stack Developer that specialized in the Node JS
          Environtment, especially MERN Stack, I really like learn new things
          and really love to code :) I'm currently focus on developing Front end
          using React JS. Have experience 3+ years Front End web developer and
          intensive bootcamp for 8 weeks in Dumbways.id. Fell free to ask and
          contact me. Best Regards.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/doni-darmawan/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            href="https://github.com/darmawandoni6"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/Darmawa19409003"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/doni.darmawan69"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
