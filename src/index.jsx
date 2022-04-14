import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { routes } from 'routes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withStyles } from '@mui/styles';
import { LayoutStyles, MainSection } from 'styles';
import { TopBar, FooterDiv, CustomDrawer } from 'components';
import { theme } from 'config';
global.process = process;

const Layout = withStyles(LayoutStyles)((props) => {
  const [isDrawerOpen, setIsDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawer(true);
  };

  const handleDrawerClose = () => {
    setIsDrawer(false);
  };

  return (
    <>
      <TopBar open={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <div
        style={{
          minHeight: '100vh',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        <MainSection open={isDrawerOpen}>{routes}</MainSection>
      </div>
      <FooterDiv />
      <CustomDrawer handleDrawerClose={handleDrawerClose} open={isDrawerOpen} />
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
