import React from "react";

const education = [
  {
    title: "Alterra Academy",
    sub: "Backend Engineer Golang",
    desc: (
      <>
        <p>
          learn the Golang programming language for 1 month to be ready to
          become a backend engineer
        </p>
        <ul>
          <li>Basic programing golang</li>
          <li>Hackerank golang</li>
          <li>ORM and SQL</li>
          <li>Unitest</li>
          <li>Final Project</li>
        </ul>
      </>
    ),
    time: "July 2021 - August 2021",
  },
  {
    title: "PT. DumbWays Indonesia Teknologi",
    sub: "Fullstack Javascript",
    desc: (
      <>
        <p>learn fullstack javascript the React js & express js</p>
        <ul>
          <li>Create fully working Node.js based project</li>
          <li>Use React.js for building front-end</li>
          <li>Use express js & sequilize for building back-end</li>
        </ul>
      </>
    ),
    time: "February 2020 - May 2020",
  },
  {
    title: "Universitas Mikroskil",
    sub: "Manajemen Informatika",
    desc: (
      <>
        <p>learn programing & Mangement</p>
        <ul>
          <li>Learn basic SQL and C# visual studio</li>
          <li>Learn HTML, CSS, & JavaScript</li>
        </ul>
      </>
    ),
    time: "July 2021 - August 2021",
    gpa: 3.78,
  },
];
const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        {education.map((item, i) => (
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            key={i}
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">{item.title}</h3>
              <div className="subheading mb-3">{item.sub}</div>
              <div>{item.desc}</div>
              {item?.gpa && <p>GPA: 3.23</p>}
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

export default Education;
