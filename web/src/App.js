import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import history from './routes/history';

import GlobalStyle from './styles/global';

import themes from './styles/themes';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Header />
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
