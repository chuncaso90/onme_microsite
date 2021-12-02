import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Progress from './components/pages/progressreport';
import Whoweare from './components/pages/whoweare';
import ourapp from './components/pages/ourapp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/progressreport' component={Progress} />
          <Route path='/whoweare' component={Whoweare} />
          <Route path='/ourapp' component={ourapp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
