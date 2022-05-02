import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <Navbar.Brand
              as={Link}
              to="/"
              className="text-primary fs-3 fw-bold text font-tapestry"
            >
              BD Books Warehouse
            </Navbar.Brand>
          </div>
          <div className="me-5">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  as={Link}
                  to="/home"
                  className=" text-dark fw-bold fs-6"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/manage-inventories"
                  className=" text-dark fw-bold fs-6"
                >
                  Manage Inventories
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/add-item"
                  className=" text-dark fw-bold fs-6"
                >
                  Add Item
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/my-items"
                  className=" text-dark fw-bold fs-6"
                >
                  My items
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
