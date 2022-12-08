import React from "react";

const experince = [
  {
    title: "Software Engineer",
    Perusahaan: "Amartha Microfinance",
    desc: "Amartha is the Information Technology-based Money Lending Service (“Fintech Loan”) is a civil agreement between Lenders and Borrowers, so that any risks arising from such agreement are entirely borne by each party.",
    time: "Agust 2021 - Present",
  },
  {
    title: "Front-End Developer",
    Perusahaan: "TwisCode",
    desc: "TwisCode specializes in developing high-performing mobile and web applications.",
    time: "May 2020 – Agust 2021",
  },
];
const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {experince.map((item, i) => (
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            key={i}
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">{item.title}</h3>
              <div className="subheading mb-3">{item.Perusahaan}</div>
              <p>{item.desc}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
