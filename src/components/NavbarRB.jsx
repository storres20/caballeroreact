import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './NavbarRB.module.css';

export default function NavbarRB() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><NavLink to="/" className={styles.navRbLink}>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/menu" className={styles.navRbLink}>Menu</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact" className={styles.navRbLink}>Contact</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
