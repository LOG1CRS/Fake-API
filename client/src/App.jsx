import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  home,
  docs,
  about,
  support,
  signin,
  signup,
  dashboard,
  newUser,
} from './routes/routes.json';
import RouterScrollToTop from './utils/RouterScrollToTop';
import theme from './assets/style/themeConfig';
import Layout from './components/layout/Layout';
import ProtectedRoutes from './routes/ProtectedRoutes';
import NewUserForm from './components/dashboard/NewUserForm';

import {
  About,
  Dashboard,
  Docs,
  Main,
  NotFound,
  SignIn,
  SignUp,
  Support,
} from './views';

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
            <ProtectedRoutes path={dashboard} Component={Dashboard} />
            <ProtectedRoutes path={newUser} Component={NewUserForm} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
