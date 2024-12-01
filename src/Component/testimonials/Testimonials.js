import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { image } from '../Images/AllImages';
import '../testimonials/Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <Container>
        <h2 className="text-center testimonials mb-4">What Our Customers Are Saying</h2>
        <Carousel 
          indicators={true} 
          interval={5000} 
          className="testimonial-carousel" 
          controls={true} 
          slide={true}
        >
          {/* Testimonial 1 */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 1" className="customer-img" />
                  <p className="testimonial-text">"I am in love with the handcrafted vase I purchased. It's the perfect !"</p>
                  <h5 className="customer-name">Sarah L.</h5>
                  <p className="customer-location">New York, NY</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 2" className="customer-img" />
                  <p className="testimonial-text">"The quality of the wooden sculptures is exceptional. Highly recommend for !"</p>
                  <h5 className="customer-name">John D.</h5>
                  <p className="customer-location">Los Angeles, CA</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 3" className="customer-img" />
                  <p className="testimonial-text">"Absolutely beautiful products! The handmade basket is perfect for ."</p>
                  <h5 className="customer-name">Emma G.</h5>
                  <p className="customer-location">San Francisco, CA</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Testimonial 2 */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 4" className="customer-img" />
                  <p className="testimonial-text">"I purchased a set of traditional pottery. Beautiful craftsmanship !"</p>
                  <h5 className="customer-name">David W.</h5>
                  <p className="customer-location">Chicago, IL</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 5" className="customer-img" />
                  <p className="testimonial-text">"Amazing service and top-quality handmade furniture. I'm very satisfied"</p>
                  <h5 className="customer-name">Sophia H.</h5>
                  <p className="customer-location">Austin, TX</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 6" className="customer-img" />
                  <p className="testimonial-text">"Highly recommend for anyone who loves authentic handmade goods"</p>
                  <h5 className="customer-name">Liam F.</h5>
                  <p className="customer-location">Miami, FL</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Testimonial 3 */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 7" className="customer-img" />
                  <p className="testimonial-text">"The rug I bought has become the centerpiece of my living room. "</p>
                  <h5 className="customer-name">Olivia M.</h5>
                  <p className="customer-location">Portland, OR</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 8" className="customer-img" />
                  <p className="testimonial-text">"Beautifully crafted products! The wall hanging is stunning in my home!"</p>
                  <h5 className="customer-name">Ethan B.</h5>
                  <p className="customer-location">Seattle, WA</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <div className="testimonial-card">
                  <img src={image.Category01} alt="Customer 9" className="customer-img" />
                  <p className="testimonial-text">"I love everything about this shop! The quality and variety are excellent."</p>
                  <h5 className="customer-name">Ava T.</h5>
                  <p className="customer-location">San Diego, CA</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}
