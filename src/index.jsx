import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { routes } from 'routes';
import {
  withStyles,
  Container,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { LayoutStyles } from 'styles';
import { TopBar } from 'components';
import { theme } from 'config';

const Layout = withStyles(LayoutStyles)((props) => {
  return (
    <>
      <TopBar />
      {routes}
    </>
  );
});

ReactDOM.render(
  <Router basename='/'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
