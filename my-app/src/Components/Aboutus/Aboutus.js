import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Aboutus.css";
import calimage from "../../image/details-2.png";

const Aboutus = () => {
  return (
    <Container className="martop aboutus">
      <Row>
        <Col className="my-auto ms-5">
          <h5>ABOUT US</h5>
          <h3>We have ten years experience in marketing</h3>
          <p>
            Etiam tempus condimentum congue. In sit amet nisi eget massa
            condimentum lobortis eget ac eros. In hac habitasse platea dictumst.
            Aenean molestie mauris eget sapien sagittis, a bibendum magna
            tincidunt
          </p>
          <Button variant="primary button_style">Get quote</Button>
        </Col>
        <Col>
          <img src={calimage} alt="calendar"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;
