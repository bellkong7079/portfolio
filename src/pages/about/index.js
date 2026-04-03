import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import profileImg from "../../assets/images/profile.jpg";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="d-flex align-items-center">
            <img
              src={profileImg}
              alt="윤종빈"
              className="profile_img"
            />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h3 className="color_sec py-4">{dataabout.title}</h3>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">경력 / 수상이력</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">기술스택</h3>
          </Col>
          <Col lg="7">
            {[
              { label: "프론트엔드", key: "frontend" },
              { label: "백엔드", key: "backend" },
              { label: "프레임워크", key: "framework" },
              { label: "데이터베이스", key: "database" },
              { label: "툴", key: "tools" },
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
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">역량</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
