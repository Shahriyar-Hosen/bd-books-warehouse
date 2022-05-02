import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-primary fs-3 fw-bold text font-tapestry"
          >
            BD Books Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/manage-inventories">
                Manage Inventories
              </Nav.Link>

              <Nav.Link as={Link} to="/add-item">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="/my-items">
                My items
              </Nav.Link>
            </Nav>
            <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
