import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import About from './components/about';
import Projects from './components/projects';
import Landing from './components/Landing';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='/projects/:id' component={Projects}/>
    </Route>

  </Router>

  , document.querySelector('.container') );