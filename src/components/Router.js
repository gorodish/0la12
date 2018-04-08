import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import NotFound from './NotFound';
import SearchResults from './SearchResults';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = { App } />
      <Route exact path = "/search-results" component = { SearchResults } />
      <Route path = "/profile/:profileId" component = { Profile } />
      <Route component = { NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Router;
