import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./Features.css";
import appdetails from "../../image/features-dashboard.png";
import ComputerIcon from "@material-ui/icons/Computer";
import MicIcon from "@material-ui/icons/Mic";
import VideocamIcon from "@material-ui/icons/Videocam";
import SettingsIcon from "@material-ui/icons/Settings";

const Features = () => {
  return (
    <div className="container_background martop">
      <Container>
        <div className="w-75 text-center mx-auto pt-5 ">
          <h4 className="pt-5">Online service features</h4>
          <p>
            Suspendisse vitae enim arcu. Aliquam convallis risus a felis
            blandit, at mollis nisi bibendum. Aliquam nec purus at ex blandit
            posuere nec a odio. Proin lacinia dolor justo
          </p>
        </div>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="iconsize">
                    <ComputerIcon />
                  </div>
                  <h5 className="ps-5">Analyze the product and design</h5>
                </Accordion.Header>
                <Accordion.Body className="ps-5">
                  <p className="ps-5">
                    Mauris ornare libero et pharetra hendrerit. Cura elementum
                    lectus quis tellus pretium, vitae lobortis dui sagittis
                    aliquam et enim vel semon anticus
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="iconsize">
                    <MicIcon />
                  </div>
                  <h5 className="ps-5">Analyze the product and design</h5>
                </Accordion.Header>
                <Accordion.Body className="ps-5">
                  <p className="ps-5">
                    Mauris ornare libero et pharetra hendrerit. Cura elementum
                    lectus quis tellus pretium, vitae lobortis dui sagittis
                    aliquam et enim vel semon anticus
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="iconsize">
                    <VideocamIcon />
                  </div>
                  <h5 className="ps-5">Analyze the product and design</h5>
                </Accordion.Header>
                <Accordion.Body className="ps-5">
                  <p className="ps-5">
                    Mauris ornare libero et pharetra hendrerit. Cura elementum
                    lectus quis tellus pretium, vitae lobortis dui sagittis
                    aliquam et enim vel semon anticus
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="iconsize">
                    <SettingsIcon />
                  </div>
                  <h5 className="ps-5">Analyze the product and design</h5>
                </Accordion.Header>
                <Accordion.Body className="ps-5">
                  <p className="ps-5">
                    Mauris ornare libero et pharetra hendrerit. Cura elementum
                    lectus quis tellus pretium, vitae lobortis dui sagittis
                    aliquam et enim vel semon anticus
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <img src={appdetails} alt="Details of application"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
