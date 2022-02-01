import './Header.css';

//Components
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (<>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Talentsource</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/apply">Candidates</Nav.Link>
          <Nav.Link href="/view-talent">Recruiters</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>);
}

export default Header;
