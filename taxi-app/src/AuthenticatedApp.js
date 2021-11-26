import React from 'react';
import GlobalStyle from './globalStyles';
import HomeClient from './pages/HomePage/HomeClient';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavbarUser } from './components';

function AuthenticatedApp({user}) {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <NavbarUser user={user}/>
      <Switch>
        <Route path='/home' exact component={HomeClient}/>
        <Route path='/profile-settings' exact component={ProfileSettings}/>
      </Switch>
    </Router>
  );
}

export default AuthenticatedApp;