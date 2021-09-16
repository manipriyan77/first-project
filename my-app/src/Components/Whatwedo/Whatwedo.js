import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "../MainPage/Mainpage.css";
import detailsimage from "../../image/details-1.png";
import "./Whatwedo.css";

const Whatwedo = () => {
  return (
    <Container className="martop details_image">
      <Row>
        <Col>
          <img src={detailsimage} alt="details"></img>
        </Col>
        <Col className="my-auto ms-5">
          <h5>What we do</h5>
          <h3>The right influencer can boost your conversion</h3>
          <p>
            Etiam tempus condimentum congue. In sit amet nisi eget massa
            condimentum lobortis eget ac eros. In hac habitasse platea dictumst.
            Aenean molestie mauris eget sapien sagittis, a bibendum magna
            tincidunt
          </p>
          <Button variant="primary button_style px-4 py-2">Get quote</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Whatwedo;
