import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/#home">
            <img
              alt=""
              src={logo}
              width="90"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                activeStyle={{
                  color: "#f46656",
                }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "#f46656",
                }}
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "#f46656",
                }}
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "#f46656",
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
