import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Progress from './components/pages/progressreport';
import Whoweare from './components/pages/whoweare';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/progressreport' component={Progress} />
          <Route path='/whoweare' component={Whoweare} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
