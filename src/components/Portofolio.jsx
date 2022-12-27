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
    desc: "Aplikasi Pendanaan P2P landing",
    img: "/assets/img/amartha-logo.png",
    link: "https://dashboard.amartha.com/v4",
  },
  {
    title: "INA Product",
    desc: "Aplikasi marketplace Produk indonesia",
    img: "/assets/img/ina-product.svg",
    link: "https://inaproduct.com/",
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
              <div className="border rounded" style={{ padding: "1rem" }}>
                <div
                  style={{ height: 120 }}
                  className="mb-4 d-flex align-items-center"
                >
                  <img
                    src={item.img}
                    style={{ width: "100%", maxHeight: "100%" }}
                    alt=""
                  />
                </div>
                <h1 style={{ fontSize: 22 }}>{item.title}</h1>
                <p>{item.desc}</p>
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
                    <i class="fa-solid fa-link me-2"></i>Visit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
