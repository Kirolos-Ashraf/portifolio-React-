import React from "react";
import { Row , Container, Col  } from "react-bootstrap";
import Card from "../../components/card-portfolio/Card";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio py-5">
        <div className="container">
          <h2 className="fs-1 fw-bold">Portfolio</h2>
          <div className=""></div>
          <Container className="my-5 w-70" >
            <Row className="mb-4">
              <Col >
              <Card title="Web Design" bgColor="#222" />
              </Col>
              <Col >
              <Card title="Web Design" bgColor="#444" />
              </Col>
              <Col >
              <Card title="Web Design" bgColor="#222" />
              </Col>
              
            </Row >
            <Row className="mb-4">
              <Col >
              <Card title="Web Design" bgColor="#444" />
              </Col>
              <Col >
              <Card title="Web Design" bgColor="#222" />
              </Col>
              <Col >
              <Card title="Web Design" bgColor="#444" />
              </Col>
              
            </Row>
            <Row className="mb-4">
              <Col >
              <Card title="Web Design" bgColor="#222" />
              </Col>
              <Col >
              <Card title="Web Design" bgColor="#444" />
              </Col>
              <Col >
              <Card title="Web Design" bgColor="#222" />
              </Col>
              
            </Row>
           
          </Container>
        </div>
      </section>
    </>
  );
}
