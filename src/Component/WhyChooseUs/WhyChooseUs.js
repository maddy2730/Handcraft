import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaThumbsUp, FaRecycle, FaShippingFast } from 'react-icons/fa'; // Example icons from react-icons
import '../WhyChooseUs/WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us py-5">
      <Container>
        <h2 className="text-center mb-4 why-us">Why Choose Us?</h2>
        <Row className="g-4">
          {/* Benefit 1 */}
          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="benefit-card text-center">
              <FaThumbsUp size={50} color="#af0e0e" />
              <h5 className="benefit-title">Handcrafted with Love</h5>
              <p className="benefit-description">Each product is carefully handmade by skilled artisans, ensuring unique quality and charm in every piece.</p>
            </div>
          </Col>

          {/* Benefit 2 */}
          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="benefit-card text-center">
              <FaRecycle size={50} color="#af0e0e" />
              <h5 className="benefit-title">Eco-Friendly Materials</h5>
              <p className="benefit-description">We use sustainable and eco-friendly materials in all our products, helping protect the environment.</p>
            </div>
          </Col>

          {/* Benefit 3 */}
          <Col xs={12} sm={6} md={4} lg={4}>
            <div className="benefit-card text-center">
              <FaShippingFast size={50} color="#af0e0e" />
              <h5 className="benefit-title">Fast & Reliable Shipping</h5>
              <p className="benefit-description">Enjoy fast, reliable, and safe shipping options for all orders. We get your handcrafted products to you quickly!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
