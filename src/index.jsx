import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { routes } from 'routes';
import { withStyles, Container } from '@material-ui/core';
import { LayoutStyles } from 'styles';
import { TopBar } from 'components';

const Layout = withStyles(LayoutStyles)((props) => {
  return (
    <>
      <TopBar />
      <Container>{routes}</Container>
    </>
  );
});

ReactDOM.render(
  <Router basename='/'>
    <Layout />
  </Router>,
  document.getElementById('root')
);
