import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Testimonials.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const Testimonials = () => {
  return (
    <div>
      <Container className="martop">
        <h3 className="text-center pb-5">Customer testimonials</h3>
        <Row className="mt-5 text-center">
          <Col>
            <div className="testimonial_details mx-auto mb-5">
              <div className="quoteicon">
                <FormatQuoteIcon className="quoteicon_size" />
              </div>
              <div className="para">
                <p>
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <h3>Roe Smith</h3>
                <p>General Manager, Presentop</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="testimonial_details mx-auto mb-5">
              <div className="quoteicon">
                <FormatQuoteIcon className="quoteicon_size" />
              </div>
              <div className="para">
                <p>
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <h3>Roe Smith</h3>
                <p>General Manager, Presentop</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="testimonial_details mx-auto mb-5">
              <div className="quoteicon">
                <FormatQuoteIcon className="quoteicon_size" />
              </div>
              <div className="para">
                <p>
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <h3>Roe Smith</h3>
                <p>General Manager, Presentop</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            <div className="testimonial_details mx-auto mb-5">
              <div className="quoteicon">
                <FormatQuoteIcon className="quoteicon_size" />
              </div>
              <div className="para">
                <p>
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <h3>Roe Smith</h3>
                <p>General Manager, Presentop</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="testimonial_details mx-auto mb-5">
              <div className="quoteicon">
                <FormatQuoteIcon className="quoteicon_size" />
              </div>
              <div className="para">
                <p>
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <h3>Roe Smith</h3>
                <p>General Manager, Presentop</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="testimonial_details mx-auto mb-5">
              <div className="quoteicon">
                <FormatQuoteIcon className="quoteicon_size" />
              </div>
              <div className="para">
                <p>
                  Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                  blandit, at mollis nisi bibendum aliquam noto ricos
                </p>
                <h3>Roe Smith</h3>
                <p>General Manager, Presentop</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
