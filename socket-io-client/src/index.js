import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Route1 from './components/route1'
import Route2 from './components/route2'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/Route1" component={ Route1 } />
      <Route path="/Route2" component={ Route2 } />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
