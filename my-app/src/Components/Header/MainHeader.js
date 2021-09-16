import React from "react";

import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./MainHeader.css";
import logoimage from "../../image/logo.svg";

const MainHeader = () => {
  return (
    <>
      <div className="header mt-4">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logoimage}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav "
              className="d-flex justify-content-end"
            >
              <Nav className="ms-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Service</Nav.Link>
                <Nav.Link href="#link">Details</Nav.Link>
                <Nav.Link href="#link">Feature</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Button variant="primary  px-4 button_style">Get Quote</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MainHeader;
