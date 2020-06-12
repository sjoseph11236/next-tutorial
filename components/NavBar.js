import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link href="/">BiltzPrice</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link href="/">Home</Link></Nav.Link>
      <Nav.Link><Link href="/about">About</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
)

export default NavBar;
