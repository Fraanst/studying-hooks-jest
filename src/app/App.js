import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { ToastProvider } from 'react-toast-notifications';
import { BaseProvider } from 'baseui';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import { lightTheme } from './theme';
import HomePage, { PATH as HOME_PAGE_PATH } from '../home/HomePage';

const engine = new Styletron();

const withProviders = (WrappedComponent) => (props) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={lightTheme}>
      <ToastProvider>
        <BrowserRouter>
          <WrappedComponent {...props} />
        </BrowserRouter>
      </ToastProvider>
    </BaseProvider>
  </StyletronProvider>
);

const App = () => (
  <div data-testid="private-app">
    <Switch>
      <Route path={HOME_PAGE_PATH} component={HomePage} />
      <Redirect from="/" to={HOME_PAGE_PATH} />
    </Switch>
  </div>
);

export { App };
export default withProviders(App);
