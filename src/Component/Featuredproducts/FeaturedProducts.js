import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { image } from '../Images/AllImages';
import '../Featuredproducts/FeaturedProducts.css';

export default function FeaturedProducts() {
  return (
    <section className="featured-products  py-4">
      <Container>
        <h2 className="text-center mb-5 Featured-Handcrafted">Featured Handcrafted Products</h2>
        <Row className="g-4">
          {/* Featured Product 1 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="product-card">
              <img src={image.Category01} alt="Product 1" className="img-fluid" />
              <h5 className="product-title mt-2">Handcrafted Vase</h5>
              <p className="product-description">Elegant handmade vase for home decor.</p>
              <p className="product-price">$30.00</p>
              <Button variant="primary btns" className="w-100">View Product</Button>
            </div>
          </Col>
          
          {/* Featured Product 2 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="product-card">
              <img src={image.Category01} alt="Product 2" className="img-fluid" />
              <h5 className="product-title mt-2">Handmade Lamp</h5>
              <p className="product-description">Create the perfect ambiance with this handcrafted lamp.</p>
              <p className="product-price">$45.00</p>
              <Button variant="primary btns" className="w-100">View Product</Button>
            </div>
          </Col>

          {/* Featured Product 3 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="product-card">
              <img src={image.Category01} alt="Product 3" className="img-fluid" />
              <h5 className="product-title mt-2">Wooden Sculpture</h5>
              <p className="product-description">An intricate wooden sculpture, perfect for any space.</p>
              <p className="product-price">$55.00</p>
              <Button variant="primary btns" className="w-100">View Product</Button>
            </div>
          </Col>

          {/* Featured Product 4 */}
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="product-card">
              <img src={image.Category01} alt="Product 4" className="img-fluid" />
              <h5 className="product-title mt-2">Handwoven Basket</h5>
              <p className="product-description">Beautifully handwoven basket for storage and decor.</p>
              <p className="product-price">$25.00</p>
              <Button variant="primary btns" className="w-100">View Product</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
