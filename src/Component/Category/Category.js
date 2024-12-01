import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { image } from '../Images/AllImages'; // Make sure the images are correctly imported
import '../Category/Cateogry.css'; // Ensure this file contains your styling

export default function Category() {
  return (
    <div>
      <Container fluid className="mt-3">
        <Row className="g-3 mobile-Screen">
          {/* Product Category 1 */}
          <Col xs={4} sm={6} md={4} lg={2} className="flip-container">
            <div className="Category_img">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.Category01} alt="Category 01" />
                  </div>
                  <div className="flip-card-back">
                    <p>Product Description</p>
                    <p>Here is some more detailed text about the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Product Category 2 */}
          <Col xs={4} sm={6} md={4} lg={2} className="flip-container">
            <div className="Category_img">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.Category02} alt="Category 02" />
                  </div>
                  <div className="flip-card-back">
                    <p>Product Description</p>
                    <p>Here is some more detailed text about the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Product Category 3 */}
          <Col xs={4} sm={6} md={4} lg={2} className="flip-container">
            <div className="Category_img">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.Category03} alt="Category 03" />
                  </div>
                  <div className="flip-card-back">
                    <p>Product Description</p>
                    <p>Here is some more detailed text about the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Product Category 4 */}
          <Col xs={4} sm={6} md={4} lg={2} className="flip-container">
            <div className="Category_img">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.Category04} alt="Category 04" />
                  </div>
                  <div className="flip-card-back">
                    <p>Product Description</p>
                    <p>Here is some more detailed text about the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Product Category 5 */}
          <Col xs={4} sm={6} md={4} lg={2} className="flip-container">
            <div className="Category_img">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.Category05} alt="Category 05" />
                  </div>
                  <div className="flip-card-back">
                    <p>Product Description</p>
                    <p>Here is some more detailed text about the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Product Category 6 */}
          <Col xs={4} sm={6} md={4} lg={2} className="flip-container">
            <div className="Category_img">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image.Category06} alt="Category 06" />
                  </div>
                  <div className="flip-card-back">
                    <p>Product Description</p>
                    <p>Here is some more detailed text about the product.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
