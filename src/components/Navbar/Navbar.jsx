import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../logo-info-cinema.svg";
import { useState } from "react";

function NavBar() {
  const [searchMovie, setSearchMovie] = useState("");
  const [mobile, setMobile] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <Navbar variant="dark" expand="lg" className="navbar-bg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img alt="" src={logo} className="navbar-logo-brand me-2" />
          <span className="navbar-logo-text">Info Cinema</span>
        </Navbar.Brand>
        <div className="d-flex align-items-center navbar-form-and-hammbur-container">
          <form
            onSubmit={handleSubmit}
            className="d-flex align-items-center navbar-form-search me-2"
          >
            <div className="d-flex align-items-center">
              <input
                type="text"
                placeholder="Search movie"
                onChange={(ev) => {
                  setSearchMovie(ev.target.value);
                }}
                className="navbar-movie-finder"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="navbar-movie-button"
                type="button"
                id="button-addon2"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar-link" href="/about-us">
                About me
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
