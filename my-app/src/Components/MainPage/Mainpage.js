import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Girlimage from "../../image/header-image.png";
import "./Mainpage.css";

const Mainpage = () => {
  return (
    <div>
      <Container className="mainpage">
        <Row>
          <Col className="my-auto main_text">
            <h1>Find influencers for your products</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dignissim, neque ut ultrices sollicitudin
            </p>
            <Button variant="primary py-2 px-4 button_style">
              Offered Services
            </Button>
          </Col>
          <Col className="girl_image mt-5">
            <img src={Girlimage} alt=" Girl" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mainpage;
