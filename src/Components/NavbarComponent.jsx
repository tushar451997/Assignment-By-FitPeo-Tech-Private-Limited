import { faBell, faEnvelope, faCog, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between w-100" >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-column flex-sm-row w-100">
          <Nav className="navbar-nav w-100 justify-content-between">
            <Nav className="d-flex align-items-center">
              <Form inline className="ml-3 d-none d-sm-block d-md-none d-lg-block">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 bg-dark text-white"
                  style={{ paddingLeft: 30, placeholderColor: 'white' }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="position-absolute text-white"
                  style={{
                    left: 20,
                    top: 25,
                    zIndex: 1,
                  }}
                />
              </Form>

              <Nav.Link href="#search" className="nav-link mx-1 d-block d-sm-none d-md-none d-lg-none">
                <FontAwesomeIcon icon={faSearch} className="rounded-circle bg-secondary p-2" />
              </Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center justify-content-end">
              <Nav.Link href="#msg" className="nav-link mx-1">
                <FontAwesomeIcon icon={faEnvelope} className="rounded-circle bg-secondary p-2" />
              </Nav.Link>
              <Nav.Link href="#notification" className="nav-link mx-1">
                <FontAwesomeIcon icon={faBell} className="rounded-circle bg-secondary p-2" />
              </Nav.Link>
              <Nav.Link href="#setting" className="nav-link mx-1">
                <FontAwesomeIcon icon={faCog} className="rounded-circle bg-secondary p-2" />
              </Nav.Link>
              <Nav.Link href="https://example.com/profile" className="nav-link mx-1">
                <FontAwesomeIcon icon={faUser} className="rounded-circle bg-secondary p-2" />
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;