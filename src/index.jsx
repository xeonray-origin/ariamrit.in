import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';

const Layout = () => <>{routes}</>;

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById('root')
);
