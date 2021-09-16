import React from "react";
import { Container, Button } from "react-bootstrap";
import image1 from "../../image/customer-logo-2.png";
import "./Customers.css";

const Customers = () => {
  return (
    <Container className="text-center mt-5">
      <h4>
        Trusted by over <span className="text_color">5000</span> customers
        worldwide
      </h4>
      <hr />
      <img src={image1} className="marright" alt="Customer logo"></img>
      <img src={image1} className="marright" alt="Customer logo"></img>
      <img src={image1} className="marright" alt="Customer logo"></img>
      <img src={image1} className="marright" alt="Customer logo"></img>
      <img src={image1} className="marright" alt="Customer logo"></img>

      <div className="free_quote ">
        <h2>Find the right influencer for your product</h2>
        <p className=" mt-4 mx-auto ">
          Eu convallis arcu ultrices in. Mauris ornare libero et pharetra
          hendrerit. Curabitur elementum lectus quis vioc tellus
        </p>
        <Button variant="primary">Get free quote</Button>
      </div>
    </Container>
  );
};

export default Customers;
