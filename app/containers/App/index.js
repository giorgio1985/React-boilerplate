/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Uomo from 'containers/Uomo/Loadable';
import Donna from 'containers/Donna/Loadable';
import Contact from 'containers/Contact/Loadable';
import Team from 'containers/Team/Loadable';
import Portfolio from 'containers/Portfolio/Loadable';
import Product from 'containers/Product/Loadable';
import About from 'containers/About/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TShirtUomo from 'containers/TShirtUomo/Loadable';
import 'bootstrap/dist/css/bootstrap.css';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1478px + 16px * 2);
  margin: auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate de sta cippa!"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/uomo" component={Uomo} />
        <Route path="/donna" component={Donna} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/t-shirts-uomo" component={TShirtUomo} /> 
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
