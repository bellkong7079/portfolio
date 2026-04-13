import React, { useEffect } from "react";
import "./style.css";
import "../home/style.css";
import "../about/style.css";
import "../portfolio/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import {
  introdata,
  meta,
  dataabout,
  worktimeline,
  skills,
  services,
  dataportfolio,
  contactConfig,
} from "../../content_option";
import profileImg from "../../assets/images/profile.jpg";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export const Main = () => {
  useScrollReveal();

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* ── HOME ── */}
      <section id="home" className="home">
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${profileImg})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <a href="#portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <a href="#about" className="text_2">
                    <div id="button_a" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <a href="#contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── PORTFOLIO ── */}
      <section id="portfolio">
        <Container className="About-header py-5">
          <Row className="mb-5 mt-3 pt-md-3 reveal-section">
            <Col lg="8">
              <h1 className="display-4 mb-4">Portfolio</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="po_grid reveal-section">
            {dataportfolio.map((data, i) => (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <hr className="section-divider" />

      {/* ── ABOUT ── */}
      <section id="about">
        <Container className="About-header py-5">
          <Row className="mb-5 mt-3 pt-md-3 reveal-section">
            <Col lg="8">
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp reveal-section">
            <Col lg="5" className="d-flex align-items-center">
              <img src={profileImg} alt="윤종빈" className="profile_img" />
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <h3 className="color_sec py-4">{dataabout.title}</h3>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp reveal-section">
            <Col lg="5">
              <h3 className="color_sec py-4">경력 / 수상이력</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="sec_sp reveal-section">
            <Col lg="5">
              <h3 className="color_sec py-4">기술스택</h3>
            </Col>
            <Col lg="7">
              {[
                { label: "개발언어", key: "language" },
                { label: "프레임워크", key: "framework" },
                { label: "개발툴", key: "devtools" },
                { label: "데이터베이스", key: "database" },
                { label: "기타", key: "etc" },
              ].map(({ label, key }) => (
                <div className="skill-category" key={key}>
                  <h6 className="skill-category-title">{label}</h6>
                  <div className="skill-logos">
                    {skills[key].map((data, i) => (
                      <div className="skill-logo-item" key={i}>
                        <img src={data.logo} alt={data.name} className="skill-logo-img" />
                        <span className="skill-logo-name">{data.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
          <Row className="sec_sp reveal-section">
            <Col lg="5">
              <h3 className="color_sec py-4">역량</h3>
            </Col>
            <Col lg="7">
              {services.map((data, i) => (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <hr className="section-divider" />

      {/* ── CONTACT ── */}
      <section id="contact">
        <Container className="py-5">
          <Row className="mb-5 mt-3 pt-md-3 reveal-section">
            <Col lg="8">
              <h1 className="display-4 mb-4">Contact Me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp reveal-section">
            <Col lg="5">
              <h3 className="color_sec py-4">Get in touch</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br /><br />
                {contactConfig.hasOwnProperty("YOUR_FONE") && (
                  <p><strong>Phone:</strong> {contactConfig.YOUR_FONE}</p>
                )}
              </address>
              <p>{contactConfig.description}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};
