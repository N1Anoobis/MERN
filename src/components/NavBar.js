import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class NavBar extends Component {
    
    state = { 
      isOpen: false,
    }

toggle = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

render() { 
  return ( 

    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
          
      </Navbar>
    </div>

  );
}
}
 
export default NavBar;