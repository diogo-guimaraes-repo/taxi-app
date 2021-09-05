import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Footer, Navbar} from './components';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
