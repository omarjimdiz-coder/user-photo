import React from 'react';
import { NavItem, Nav, NavLink } from 'reactstrap';
import './navegador..css';

const Navegador = () => {
  return (
    <Nav className='nav'>
      <NavItem>
        <NavLink href="#">Bienvenido</NavLink>
      </NavItem>
  </Nav>
)}

export default Navegador;