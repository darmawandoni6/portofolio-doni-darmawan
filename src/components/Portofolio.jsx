import React from "react";

const listPorto = [
  {
    title: "Template UI React",
    desc: "Free React Js boilerplate ready to use",
    img: "/assets/img/Npm-logo.svg",
    git: "https://github.com/darmawandoni6/template-ui-react",
    link: "https://www.npmjs.com/package/template-ui-react",
  },
  {
    title: "Amartha P2P",
    desc: "P2P lending application",
    img: "/assets/img/amartha-logo.png",
    link: "https://dashboard.amartha.com/v4",
  },
  // {
  //   title: "INA Product",
  //   desc: "Indonesian product marketplace application",
  //   img: "/assets/img/ina-product.svg",
  //   link: "https://inaproduct.com/",
  // },
  {
    title: "Catat Uangku",
    desc: "Application to record accounts payable and transactions",
    img: "https://raw.githubusercontent.com/darmawandoni6/catat-uang/master/public/icon-512x512.png",
    link: "https://catat-uangku.vercel.app/",
    git: "https://github.com/darmawandoni6/catat-uang",
  },
  {
    title: "TEMPLATE ADMIN",
    desc: "This application created with core-ui, NextJs and typeScript",
    img: "https://raw.githubusercontent.com/darmawandoni6/core-ui-next/main/public/preview.png",
    link: "https://core-ui-next.vercel.app/",
    git: "https://github.com/darmawandoni6/core-ui-next",
  },
];
const Portofolio = () => {
  return (
    <section className="resume-section" id="portofolio">
      <div className="resume-section-content">
        <h2 className="mb-5">Portofolio</h2>
        <div className="row w-100">
          {listPorto.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card m-2" style={{ height: "95%" }}>
                <div
                  style={{
                    height: 155,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="p-3"
                    src={item.img}
                    style={{
                      maxWidth: "100%",
                      maxHeight: 155,
                    }}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  {item.git && (
                    <button
                      className="btn btn-outline-primary me-2 mb-2"
                      onClick={() => window.open(item.git)}
                    >
                      <i className="fab fa-github me-2"></i>Github
                    </button>
                  )}
                  {item.link && (
                    <button
                      className="btn btn-outline-primary mb-2"
                      onClick={() => window.open(item.link)}
                    >
                      <i className="fa-solid fa-link me-2"></i>Visit
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
