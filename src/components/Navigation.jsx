import React from "react";

const menu = [
  {
    label: "About",
    href: "#about",
    id: "tag-about",
  },
  {
    label: "Experience",
    href: "#experience",
    id: "tag-experience",
  },
  {
    label: "Education",
    href: "#education",
    id: "tag-education",
  },
  {
    label: "Skills",
    href: "#skills",
    id: "tag-skills",
  },
  {
    label: "Interests",
    href: "#interests",
    id: "tag-interests",
  },
  {
    label: "Certifications",
    href: "#certifications",
    id: "tag-certifications",
  },
  {
    label: "Portofolio",
    href: "#portofolio",
    id: "tag-portofolio",
  },
];
const Navigation = () => {
  const [active, setActive] = React.useState(menu[0].href);

  const handleRef = (href) => {
    setActive(href);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Doni Darmawan</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assets/img/profile.PNG"
            style={{ height: 160, width: 160 }}
            alt="..."
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          {menu.map((item) => (
            <li
              className="nav-item"
              key={item.href}
              onClick={() => handleRef(item.href)}
            >
              <a
                className={`nav-link js-scroll-trigger ${
                  active === item.href ? "active" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
