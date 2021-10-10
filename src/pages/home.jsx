import { withStyles, Container, Grid } from '@material-ui/core';
import { HomePageStyles } from 'styles';
import {
  HeroSection,
  AboutSection,
  ProductsCards,
  AccreditDisplay,
} from 'components';
import { homePageContent } from 'config';

const HomePage = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.heroSection}>
        <Container>
          <HeroSection />
        </Container>
      </div>
      <div className={classes.aboutSection}>
        <AboutSection />
      </div>
      <div className={classes.productsSection}>
        <Container>
          <Grid
            container
            spacing={1}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            {homePageContent.productSection.cards.map((product) => (
              <Grid item xs={12} md={4}>
                <ProductsCards
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  image={product.image}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className={classes.accreditSection}>
        <Container>
          <Grid
            container
            spacing={10}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            {homePageContent.accredits.map((item) => (
              <Grid item md={4} xs={12}>
                <AccreditDisplay
                  isIcon={item.isIcon}
                  image={item.image}
                  text={item.text}
                  stat={item.stat}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default withStyles(HomePageStyles)(HomePage);
