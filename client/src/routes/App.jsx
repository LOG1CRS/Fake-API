import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { home, docs } from './routes.json';

import Layout from '../components/layout/Layout';
import theme from '../assets/style/themeConfig';
import Main from '../views/Main';
import Docs from '../views/Docs';
import NotFound from '../views/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path={home} component={Main} />
            <Route exact path={docs} component={Docs} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
