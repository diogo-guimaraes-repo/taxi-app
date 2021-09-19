import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignUp/SignIn';
import PasswordReset from './pages/SignUp/PasswordReset';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Footer, Navbar} from './components';

function UnauthenticatedApp({loading}) {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' render={props => <SignUp loading={loading}/>}/>
        <Route path='/sign-in' render={props => <SignIn loading={loading}/>}/>
        <Route path='/password-reset' exact component={PasswordReset}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default UnauthenticatedApp;