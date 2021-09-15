import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { routes } from 'routes';

const Layout = () => <>{routes}</>;

ReactDOM.render(
  <Router basename='/'>
    <Layout />
  </Router>,
  document.getElementById('root')
);
