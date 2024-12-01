import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../NewsletterSignup/NewsletterSignup.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission here
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <section className="newsletter-signup py-5">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2>Stay Updated</h2>
            <p className="lead">Join our community and be the first to know about new arrivals, exclusive offers, and more!</p>
            <Form onSubmit={handleSubmit} className="newsletter-form">
              <Form.Group controlId="formBasicEmail" className="d-flex justify-content-center">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <Button variant="primary" type="submit" className="ms-2">Subscribe</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
