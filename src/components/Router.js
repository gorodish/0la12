import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = { Home } />
      <Route path = "/profile/:profileId" component = { Profile } />
      <Route component = { NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Router;
