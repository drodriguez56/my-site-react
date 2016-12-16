import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import About from './components/about';
import Projects from './components/projects';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
    </Route>

  </Router>

  , document.querySelector('.container') );