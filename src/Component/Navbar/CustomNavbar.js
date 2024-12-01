import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
  Offcanvas,
  Dropdown,
} from 'react-bootstrap';
import { FaShoppingBag, FaHeart, FaUser, FaSearch, FaBars, FaPlus } from 'react-icons/fa';
import '../Navbar/CustomNavbar.css';
import { image } from '../Images/AllImages';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);

  // Detect scroll and update state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger fixed position after scrolling 50px
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dummy data for dropdown items
  const categories = [
    { name: 'Painting', items: Array.from({ length: 100 }, (_, i) => `Painting Item ${i + 1}`) },
    { name: 'Home Decor', items: Array.from({ length: 100 }, (_, i) => `Home Decor Item ${i + 1}`) },
    { name: 'Ram Temple', items: Array.from({ length: 100 }, (_, i) => `Ram Temple Item ${i + 1}`) },
    { name: 'Showpiece', items: Array.from({ length: 100 }, (_, i) => `Showpiece Item ${i + 1}`) },
    { name: 'Wall Hanging', items: Array.from({ length: 100 }, (_, i) => `Wall Hanging Item ${i + 1}`) },
    { name: 'Vases', items: Array.from({ length: 100 }, (_, i) => `Vase Item ${i + 1}`) },
  ];

  return (
    <>
     <div className='collect-bar'>
     <header>
     <Navbar
  expand="lg"
  className={`d-none d-lg-flex pt-3 destop_screen ${scrolled ? 'scrolled fixed-top' : 'transparent'}`}
>

          <Container fluid>
            {/* Logo */}
            <Navbar.Brand href="#">
              <img src={image.ctc} alt="Logo" width="110" height="50" />
            </Navbar.Brand>

            {/* Search Box */}
            <Form className="d-flex mx-auto" style={{ width: '50%' }}>
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-secondary Seach_btn border-0">
                <FaSearch />
              </Button>
            </Form>

            {/* Icons with Badge */}
            <Nav>
              <Nav.Link href="#cart" className="position-relative">
                <FaShoppingBag size={20} />
                <Badge bg="danger" pill className="position-absolute top-1 translate-middle">
                  3
                </Badge>
              </Nav.Link>
              <Nav.Link href="#like" className="position-relative mx-3">
                <FaHeart size={20} />
                <Badge bg="danger" pill className="position-absolute top-1 translate-middle">
                  5
                </Badge>
              </Nav.Link>
              <Nav.Link href="#user">
                <FaUser size={20} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Navbar
        expand="lg"
        className={`d-none d-lg-flex phone_screen ${scrolled ? 'scrolled' : 'transparent'}`}
      >
        <Container fluid className="justify-content-center">
          <Nav className="gap-5">
            {categories.map((category, index) => (
              <Dropdown key={index} className="dropdown">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-custom-components"
                  className="text-dark text-decoration-none"
                >
                  {category.name}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  <div className="d-flex flex-column">
                    {category.items.slice(0, 20).map((item, idx) => (
                      <Dropdown.Item key={idx} href="#">
                        {item}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </Nav>
        </Container>
      </Navbar>
     </div>

      {/* Mobile Navbar */}
      <Navbar bg="light" expand="lg" className="d-lg-none">
        <Container fluid>
          {/* Toggle Button */}
          <Button variant="light" onClick={handleToggle}>
            <FaBars size={20} />
          </Button>

          {/* Logo */}
          <Navbar.Brand href="#" className="mx-auto">
            <img src={image.ctc} alt="Logo" width="40" height="40" />
          </Navbar.Brand>

          {/* Icons */}
          <Nav className="d-flex flex-row gap-3">
            <Nav.Link href="#user" className="me-3">
              <FaUser size={20} />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingBag size={20} />
              <Badge bg="danger" pill className="position-absolute top-1 translate-middle">
                3
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {categories.map((category, index) => (
            <div key={index} className="mb-3">
              <Button variant="link" className="w-100" aria-expanded="false">
                <FaPlus /> {category.name}
              </Button>
              <Nav className="flex-column">
                {category.items.slice(0, 5).map((item, idx) => (
                  <Nav.Link key={idx} href="#">
                    {item}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
