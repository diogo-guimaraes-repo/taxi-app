import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
