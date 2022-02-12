import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col>
              <h3 className="fs-4 mb-4">Get In Touch</h3>
              <p>
                <i className="fa fa-solid fa-envelope fa-lg mx-3"></i>
                kiroloss.ashraff@gmail.com
              </p>
              <p>
                <i className="fa fa-solid fa-phone fa-lg mx-3"></i>
                122-334-798
              </p>
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center"
            >
              <button className="btn btn-dark text-white border-white py-2 px-4 ">
                Contact Me
              </button>
            </Col>
            <Col className="d-flex align-items-center ">
              <div >
                <ul className="d-flex gap-3 list-style-none">
                  <li>
                    <a href="#">
                      <i className="fa fa-brands fa-facebook text-white fs-4"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-brands fa-twitter text-white  fs-4"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-brands fa-linkedin text-white fs-4"></i>
                    </a>
                  </li>
                </ul>
                <p>Copyright &copy; 2022 KR</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
