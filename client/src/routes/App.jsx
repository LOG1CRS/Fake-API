import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../views/Main';
import Docs from '../views/Docs';
import NotFound from '../views/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/docs" component={Docs} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
