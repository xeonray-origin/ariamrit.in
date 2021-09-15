import { withStyles } from '@material-ui/core';
import { HomePageStyles } from 'styles';

const HomePage = () => (
  <>
    HomePage
    <img src={`${process.env.PUBLIC_URL}/resources/logo.png`} alt='' />{' '}
  </>
);

export default withStyles(HomePageStyles)(HomePage);
