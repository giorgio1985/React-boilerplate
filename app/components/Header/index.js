import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import { TopHeader, InnerHeader } from './style';
import Headerlink from '../Headerlink';

function Header() {
  
  

  return (
    <div>
      <TopHeader>
        <InnerHeader />
      </TopHeader>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} /> 
        </HeaderLink>
        <HeaderLink to="/contact">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>
       {/* <HeaderLink to="/team">
          <FormattedMessage {...messages.team} />
        </HeaderLink>
        <HeaderLink to="/portfolio">
          <FormattedMessage {...messages.portfolio} />
        </HeaderLink>*/} 
        <HeaderLink to="/product">
          <FormattedMessage {...messages.product} />
        </HeaderLink>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
        <Headerlink onClick={(ev) => { alert('Coming soon'); console.log('event.target:', ev.target); }}>
           <FormattedMessage {...messages.login} />  {/* */}
        </Headerlink>
      
      </NavBar>
    </div>
  );

}

export default Header;
