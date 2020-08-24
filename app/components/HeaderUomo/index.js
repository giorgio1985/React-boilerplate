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
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './headerUomo.css';

function HeaderUomo() {
  return (   
    <>
    <div>
      <FormattedMessage {...messages.header} />

    <div>
    
  
    
    <Navbar bg="dark" id="basic-nav-dropdown" className="mr-auto"  expand="lg">

    <NavDropdown title="Nuovi Arrivi"  bg="dark" variant="dark"  id="colorClass" >
        <NavDropdown.Item href="news-abbigliamento-uomo" >Abbigliamento</NavDropdown.Item>
        <NavDropdown.Item href="news-scarpe-uomo">Scarpe</NavDropdown.Item>
        <NavDropdown.Item href="news-accessori-uomo">Accessori</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="news-altro-uomo">Altro</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Abbigliamento"  bg="dark" variant="dark" id="colorClass">
      <NavDropdown title="Categorie"  bg="dark" variant="dark" id="categorieColorClass">
        <NavDropdown.Item href="t-shirts-uomo">T-shirt</NavDropdown.Item>
        <NavDropdown.Item href="Maglie-e-Felpe-uomo">Maglie &amp; Felpe </NavDropdown.Item>
        <NavDropdown.Item href="Pantaloni-uomo">Pantaloni</NavDropdown.Item>
        <NavDropdown.Item href="Giubbotti-uomo">Giubbotti</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="altro-uomo">Altro</NavDropdown.Item>
      </NavDropdown>
      </NavDropdown>

      <NavDropdown title="Scarpe"  bg="dark" variant="dark" id="colorClass">
        <NavDropdown.Item href="Scarpe-uomo">Sportive</NavDropdown.Item>
        <NavDropdown.Item href="Stivali-uomo">Stivali</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Accessori"  bg="dark" variant="dark" id="colorClass">
        <NavDropdown.Item href="Occhiali-uomo">Occhiali</NavDropdown.Item>
      </NavDropdown>

 
      <Form id="topForm" inline>
        <FormControl type="text" placeholder="Search"  />
        <Button variant="outline-info">Search</Button>
     </Form>

   </Navbar>


  
    </div>


    </div>

    </>
  );
}

HeaderUomo.propTypes = {};

export default HeaderUomo;
