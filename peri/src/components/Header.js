import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
    <Container>
      <Link to='/'>
      <Navbar.Brand>Peri Moda</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Link to='/cart'>
          <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </Link>
          <Link to='/login'>
          <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>
  )
}

export default Header
