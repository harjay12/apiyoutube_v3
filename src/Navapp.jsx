import React from "react";
import {
  Nav,
  Navbar,
  FormControl,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";

function Navapp() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Homepage</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/About">About-Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Contact">Contact-Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-md-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navapp;
