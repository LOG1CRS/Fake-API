import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { home, docs, about, support, signin, signup } from './routes.json';
import RouterScrollToTop from '../utils/RouterScrollToTop';

import Layout from '../components/layout/Layout';
import theme from '../assets/style/themeConfig';
import Main from '../views/Main';
import Docs from '../views/Docs';
import NotFound from '../views/NotFound';
import About from '../views/About';
import Support from '../views/Support';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RouterScrollToTop />
        <Layout>
          <Switch>
            <Route exact path={home} component={Main} />
            <Route exact path={docs} component={Docs} />
            <Route exact path={about} component={About} />
            <Route exact path={support} component={Support} />
            <Route exact path={signin} component={SignIn} />
            <Route exact path={signup} component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
