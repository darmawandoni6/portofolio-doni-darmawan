import React from "react";

const certifications = [
  {
    name: "CERTIFICATE GRADUATION",
    desc: "For successfully completing Golang course",
    penerbit: "Alterra Academy",
    link: "#",
  },
  {
    name: "CERTIFICATE GRADUATION",
    desc: "who has succeeded and passed the Bootcamp Batch #14",
    penerbit: "DumbWays.id",
    link: "#",
  },
];
const Certifications = () => {
  return (
    <section className="resume-section" id="certifications">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>
        <ul className="fa-ul mb-0">
          {certifications.map((item, i) => (
            <li key={i}>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              <a href={item.link} target="_blank">
                {`${item.name} - ${item.penerbit} - ${item.desc} `}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
