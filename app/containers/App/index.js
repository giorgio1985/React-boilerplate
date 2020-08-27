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
import FelpeUomo from 'containers/FelpeUomo/Loadable';
import PantaloniUomo from 'containers/PantaloniUomo/Loadable';
import GiubbottiUomo from 'containers/GiubottiUomo/Loadable';
import AbbigliamentoUomo from 'containers/AbbigliamentoUomo/Loadable'; //nuovi arrivi
import ScarpeUomo from 'containers/ScarpeUomo/Loadable'; //nuovi arrivi
import AccessoriNews from 'containers/AccessoriNews/Loadable'; //nuovi arrivi
import SportiveUomo from 'containers/SportiveUomo/Loadable';
import StivaliUomo from 'containers/StivaliUomo/Loadable';
import OcchialiUomo from 'containers/OcchialiUomo/Loadable';
import AbbigliamentoDonnaNews from 'containers/AbbigliamentoDonnaNews/Loadable';
import ScarpeDonnaNews from 'containers/ScarpeDonnaNews/Loadable';
import BorseAccessoriDonnaNews from 'containers/BorseAccessoriDonnaNews/Loadable';
import TShirtDonna from 'containers/TShirtDonna/Loadable';
import FelpeDonna from 'containers/FelpeDonna/Loadable';
import Gonne from 'containers/Gonne/Loadable';
import PantaloniDonna from 'containers/PantaloniDonna/Loadable';
import GiubbottiDonna from 'containers/GiubbottiDonna/Loadable';
import SportiveDonna from 'containers/SportiveDonna/Loadable';
import StivaliDonna from 'containers/StivaliDonna/Loadable';
import Borse from 'containers/Borse/Loadable';
import OcchialiDonna from 'containers/OcchialiDonna/Loadable';
import StivalettiDonna from 'containers/StivalettiDonna/Loadable';
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
        <Route path="/Maglie-e-Felpe-uomo" component={FelpeUomo} /> 
        <Route path="/Pantaloni-uomo" component={PantaloniUomo} />
        <Route path="/Giubbotti-uomo" component={GiubbottiUomo}/>
        <Route path="/news-abbigliamento-uomo" component={AbbigliamentoUomo}/> {/* news */}
        <Route path="/news-scarpe-uomo" component={ScarpeUomo}/> {/* news */}
        <Route path="/news-accessori-uomo" component={AccessoriNews}/>
        <Route path="/Scarpe-uomo" component={SportiveUomo}/>
        <Route path="/Stivali-uomo" component={StivaliUomo}/>
        <Route path="/Occhiali-uomo" component={OcchialiUomo}/>
        <Route path="/news-abbigliamento-donna" component={AbbigliamentoDonnaNews}/>
        <Route path="/news-scarpe-donna" component={ScarpeDonnaNews}/>
        <Route path="/news-Borse-accessori-donna" component={BorseAccessoriDonnaNews}/>
        <Route path="/T-Shirts-donna" component={TShirtDonna}/>
        <Route path="/Maglie-e-Felpe-donna" component={FelpeDonna}/>
        <Route path="/Gonne" component={Gonne}/>
        <Route path="/Pantaloni-donna" component={PantaloniDonna}/>
        <Route path="/Giubbotti-donna" component={GiubbottiDonna}/>
        <Route path="/Scarpe-donna" component={SportiveDonna}/>
        <Route path="/Stivali-donna" component={StivaliDonna}/>
        <Route path="/Borse-donna" component={Borse}/>
        <Route path="/Occhiali-donna" component={OcchialiDonna}/>
        <Route path="/Stivaletti-donna" component={StivalettiDonna}/>
        <Route path="/*" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
