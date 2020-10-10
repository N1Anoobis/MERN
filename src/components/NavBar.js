import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class NavBar extends Component {
    
    state = { 
      isOpen: false,
    }

toggle = () => {
  this.setState({
    isOpen: !this.state.isOpen,
  });
}

render() { 
  return ( 

    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand >MongoDB Express React Node.js</NavbarBrand>
          <NavbarToggler onClick={this.toggle} ></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar></Collapse>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://slawomirkaczynski.netlify.app">Portfolio</NavLink>
            </NavItem>
          </Nav>

        </Container>
      </Navbar>
    </div>

  );
}
}
 
export default NavBar;