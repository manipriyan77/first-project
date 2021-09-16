import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import HeadsetIcon from "@material-ui/icons/Headset";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import "./OurService.css";

const Ourservice = () => {
  return (
    <Container className="pad_bot">
      <div className="pb-4">
        <h2>Explore our services</h2>
      </div>
      <Row>
        <Col className="col_container">
          <div className="iconbackground d-flex justify-content-center align-items-center mb-5">
            <HeadsetIcon />
          </div>
          <h5>Analyse your product</h5>
          <p>
            Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis
            viverra. Nullam pharetra ante at nunc elementum
          </p>
          <Button variant="primary">
            Primary <ArrowRightAltIcon />
          </Button>
        </Col>
        <Col className="col_container">
          <div className="iconbackground d-flex justify-content-center align-items-center mb-5">
            <NoteAddIcon className="icon_size" />
          </div>
          <h5>Analyse your product</h5>
          <p>
            Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis
            viverra. Nullam pharetra ante at nunc elementum
          </p>
          <Button variant="primary">
            Primary <ArrowRightAltIcon />
          </Button>
        </Col>
        <Col className="col_container">
          <div className="iconbackground d-flex justify-content-center align-items-center mb-5">
            <ChatBubbleIcon />
          </div>
          <h5>Analyse your product</h5>
          <p>
            Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis
            viverra. Nullam pharetra ante at nunc elementum
          </p>
          <Button variant="primary">
            Primary <ArrowRightAltIcon />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Ourservice;
