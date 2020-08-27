/**
 *
 * HeaderDonna
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
import './headerDonna.css';

function HeaderDonna() {
  return (
    <>
    <div>
      <FormattedMessage {...messages.header} />
    
    <div>
        <Navbar bg="dark" id="basic-nav-dropdown"  className="mr-auto"  expand="lg">
     
        <NavDropdown title="Nuovi Arrivi"  bg="dark" variant="dark"  id="colorClass" >
          <NavDropdown.Item href="news-abbigliamento-donna" >Abbigliamento</NavDropdown.Item>
          <NavDropdown.Item href="news-scarpe-donna">Scarpe</NavDropdown.Item>
          <NavDropdown.Item href="news-Borse-accessori-donna">Borse e accessori</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="news-altro-donna">Altro</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Abbigliamento"  bg="dark" variant="dark" id="colorClass">
      <NavDropdown title="Categorie"  bg="dark" variant="dark" id="categorieColorClass">
        <NavDropdown.Item href="T-Shirts-donna">T-shirt</NavDropdown.Item>
        <NavDropdown.Item href="Maglie-e-Felpe-donna">Maglie &amp; Felpe </NavDropdown.Item>
        <NavDropdown.Item href="Gonne">Gonne</NavDropdown.Item>
        <NavDropdown.Item href="Pantaloni-donna">Pantaloni</NavDropdown.Item>
        <NavDropdown.Item href="Giubbotti-donna">Giubbotti</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="altro-donna">Altro</NavDropdown.Item>
      </NavDropdown>
      </NavDropdown>

      <NavDropdown title="Scarpe"  bg="dark" variant="dark" id="colorClass">
        <NavDropdown.Item href="Scarpe-donna">Sportive</NavDropdown.Item>
        <NavDropdown.Item href="Stivali-donna">Stivali</NavDropdown.Item>
        <NavDropdown.Item href="Stivaletti-donna">Stivaletti</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Borse e Accessori"  bg="dark" variant="dark" id="colorClass">
        <NavDropdown.Item href="Borse-donna">Borse</NavDropdown.Item>
        <NavDropdown.Item href="Occhiali-donna">Occhiali</NavDropdown.Item>
      </NavDropdown>

      <Form  id="topForm" inline>
        <FormControl type="text" placeholder="Search"  />
        <Button variant="outline-info">Search</Button>
     </Form>
          
          </Navbar>
    </div>
</div>
</>
  );
}

HeaderDonna.propTypes = {};

export default HeaderDonna;
