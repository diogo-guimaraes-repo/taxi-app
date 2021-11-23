import React from 'react';
import GlobalStyle from './globalStyles';
import HomeClient from './pages/HomePage/HomeClient';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Footer, NavbarUser} from './components';

function AuthenticatedApp({user}) {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <NavbarUser user={user}/>
      <Switch>
        <Route path='/home' exact component={HomeClient}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default AuthenticatedApp;