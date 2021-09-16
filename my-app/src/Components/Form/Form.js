import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Inputform = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h5>Get quote</h5>
          <h3>Submit the form for quote</h3>
          <p>
            Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem. Sed
            risus ipsum, egestas sed odio in, pulvinar euismod ipsum. Sed ut
            enim non nunc fermentum dictum et sit amet erat. Maecenas
          </p>
          <ul>
            <li>Vel maximus nunc aliquam ut. Donec semper, magna a pulvinar</li>
            <li>Vel maximus nunc aliquam ut. Donec semper, magna a pulvinar</li>
            <li>Vel maximus nunc aliquam ut. Donec semper, magna a pulvinar</li>
          </ul>
        </Col>

        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Inputform;
