import { withStyles, Container } from '@material-ui/core';
import { HomePageStyles } from 'styles';
import { HeroSection, AboutSection, ProductsSection } from 'components';

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
      <div className={classes.productsSection}>
        <ProductsSection />
      </div>
    </>
  );
};

export default withStyles(HomePageStyles)(HomePage);
