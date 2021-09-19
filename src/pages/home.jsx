import { withStyles, Container } from '@material-ui/core';
import { HomePageStyles } from 'styles';
import { HeroSection } from 'components';

const HomePage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.heroSection}>
      <HeroSection />
    </div>
  );
};

export default withStyles(HomePageStyles)(HomePage);
