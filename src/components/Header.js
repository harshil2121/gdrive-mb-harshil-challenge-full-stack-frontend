import { Navbar, Nav, Button, Row, Col, NavDropdown } from "react-bootstrap";
import { ArrowRight } from "react-feather";
import Metalogo from "../Pages/assesst/image/meta-logo.svg";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Row className="w-100 justify-content-center align-items-center">
        <Col md="auto">
          <Navbar.Brand href="/">
            <img src={Metalogo} height={20} alt="" />
          </Navbar.Brand>
        </Col>
        <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="w-100 justify-content-around"
            id="basic-navbar-nav"
          >
            <div className="navbar-center-list">
              <Nav className="ml-auto">
                <NavDropdown
                  className="navbar-list-data"
                  title="Platform"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/1.1">
                    Data Discovery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.2">
                    Data Loss Previntion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3">
                    Access Control
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.4">
                    DSPM Tool
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="navbar-list-data"
                  title="Resource Center"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/2.1">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.2">Prees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.3">Video</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.4">
                    Product
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="navbar-list-data"
                  title="Company"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Careers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    About us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Contact us
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navbar-list-data" href="#case-studies">
                  Case Stuides
                </Nav.Link>
                <Nav.Link className="navbar-list-data" href="#partners">
                  Partners
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Col>
        <Col md="auto">
          <Button className="ml-2">Run Free Scan</Button>
          <Button variant="light" className="ml-2">
            Book a Demo
            <span className="demo-btn-right-arrow">
              <ArrowRight />
            </span>
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
