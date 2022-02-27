import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function NavbarRB() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/menu">Menu</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
