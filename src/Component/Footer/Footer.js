import React from 'react';
import './Footer.css'; // Make sure to add the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer-aesthetic">
    <div className="footer-container">
      <div className="footer-about">
        <h3 className="footer-title">About KalaakreetiHandicrafts</h3>
        <p>
          KalaakreetiHandicrafts connects the craftsmanship of traditional Indian artisans to the global world,
          offering exquisite handmade products. Our journey is driven by the mission to uplift artisans' skills
          while promoting their timeless work in modern spaces.
        </p>
      </div>

      <div className="footer-links">
        <h3 className="footer-title">Explore</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3 className="footer-title">Contact</h3>
        <p>Email: info@kallahandicrafts.in</p>
        <p>Phone: +91 123 456 7890</p>
        <p>Address: 123 Handicraft meerut, India</p>
      </div>

      <div className="footer-social">
        <h3 className="footer-title">Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2024 KalaakreetiHandicrafts | All Rights Reserved</p>
    </div>
  </footer>
  );
};

export default Footer;
