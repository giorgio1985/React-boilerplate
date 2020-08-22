/**
 *
 * HeaderUomo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './headerUomo.css';

function HeaderUomo() {
  return (   
    <div>
      <FormattedMessage {...messages.header} />

    <div>
    
  
    
    <Navbar bg="dark" id="basic-nav-dropdown" >

    <NavDropdown title="Nuovi Arrivi"  bg="dark" variant="dark"  id="colorClass" >
        <NavDropdown.Item href="abbigliamento-news" >Abbigliamento</NavDropdown.Item>
        <NavDropdown.Item href="scarpe-news">Scarpe</NavDropdown.Item>
        <NavDropdown.Item href="accessori-news">Accessori</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="altre-news">Altro</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Abbigliamento"  bg="dark" variant="dark" id="colorClass">
      <NavDropdown title="Categorie"  bg="dark" variant="dark" >
        <NavDropdown.Item href="T-Shirts">T-shirt</NavDropdown.Item>
        <NavDropdown.Item href="Maglie-e-Felpe">Maglie &amp; Felpe </NavDropdown.Item>
        <NavDropdown.Item href="Pantaloni">Pantaloni</NavDropdown.Item>
        <NavDropdown.Item href="Giubbotti">Giubbotti</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="altro">Altro</NavDropdown.Item>
      </NavDropdown>
      </NavDropdown>

      <NavDropdown title="Scarpe"  bg="dark" variant="dark" id="colorClass">
        <NavDropdown.Item href="Scarpe">Sportive</NavDropdown.Item>
        <NavDropdown.Item href="Scarpe">Stivali</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Accessori"  bg="dark" variant="dark" id="colorClass">
        <NavDropdown.Item href="Accessori">Occhiali</NavDropdown.Item>
      </NavDropdown>

   </Navbar>
    

  
    </div>


    </div>

 
  );
}

HeaderUomo.propTypes = {};

export default HeaderUomo;
