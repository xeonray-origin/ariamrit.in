import React from 'react';
import { Grid } from '@material-ui/core';
import { HeroSection } from './../../components';

const HomePage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
