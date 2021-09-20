import { withStyles, Container } from '@material-ui/core';
import { HomePageStyles } from 'styles';
import { HeroSection, AboutSection } from 'components';

const HomePage = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.heroSection}>
        <HeroSection />
      </div>
      <div className={classes.aboutSection}>
        <AboutSection />
      </div>
    </>
  );
};

export default withStyles(HomePageStyles)(HomePage);
