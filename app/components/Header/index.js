import React, {  useState } from 'react';
import { FormattedMessage } from 'react-intl';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import { TopHeader, InnerHeader } from './style';


function Header() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<div>
   <TopHeader>
      <InnerHeader />
   </TopHeader>
   <NavBar>
   
      <HeaderLink to="/">
         <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/uomo">
         <FormattedMessage {...messages.uomo} />
      </HeaderLink> 
      <HeaderLink to="/donna">
         <FormattedMessage {...messages.donna} />
      </HeaderLink> 
      <HeaderLink to="/contact">
         <FormattedMessage {...messages.contact} />
      </HeaderLink>
      {/* 
      <HeaderLink to="/team">
         <FormattedMessage {...messages.team} />
      </HeaderLink>
      <HeaderLink to="/portfolio">
         <FormattedMessage {...messages.portfolio} />
      </HeaderLink>
       
      <HeaderLink to="/product">
         <FormattedMessage {...messages.product} />
      </HeaderLink>*/}
      <HeaderLink to="/about">
         <FormattedMessage {...messages.about} />
      </HeaderLink> 
     
      <Button variant="none" onClick={handleShow} >
      <i className="fa fa-lock" aria-hidden="true"></i>
         <FormattedMessage {...messages.login} />
      </Button>
      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title><i className="fa fa-lock" aria-hidden="true"></i>Login</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <form>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>
               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
               </Form.Group>
               <Button variant="primary" type="submit">
                     Login
               </Button>
            </form>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={handleClose}>
            Close
            </Button>
         </Modal.Footer>
      </Modal>
   </NavBar>
</div> 


  ); 

}

export default Header;
