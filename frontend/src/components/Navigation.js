
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';


const Navigation = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand >Navbar AF</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse>
                <Nav className='ms-auto'>
                  <LinkContainer to='/cart'>
                    <Nav.Link ><FaShoppingCart/> Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                    <Nav.Link><FaUser /> Login</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Navigation