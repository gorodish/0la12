import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import ProfileOther from './ProfileOther';
import NotFound from './NotFound';
import SearchResults from './SearchResults';
import ProfilePicker from './ProfilePicker';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProfilePicker} />
      <Route exact path="/app" component={App} />
      <Route exact path="/search-results" component={SearchResults} />
      <Route path="/profile/:profileId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
