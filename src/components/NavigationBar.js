import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/thao-logo.png';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/project">
              <AiOutlineFundProjectionScreen /> Project
            </Nav.Link>
            <Nav.Link href="/resume">
              <HiOutlineDocumentText /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
