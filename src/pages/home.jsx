import { Container, Grid, Typography } from '@mui/material';
import { HomePageStyles } from 'styles';
import {
  HeroSection,
  AboutSection,
  ProductsCards,
  AccreditDisplay,
  ResearchCard,
  FeedCard,
  ContactForm,
} from 'components';
import { homePageContent } from 'config';
import { withStyles } from '@mui/styles';

const GLOBAL_SPACING = 5;

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
        <Container>
          <AboutSection />
        </Container>
      </div>
      <div className={classes.productsSection}>
        <Container>
          <Grid
            container
            spacing={GLOBAL_SPACING}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            {homePageContent.productSection.cards.map((product) => (
              <Grid item xs={12} md={4}>
                <ProductsCards
                  id={product.id}
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
            spacing={5}
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
      <div className={classes.researchSection}>
        <Container>
          <Grid
            container
            spacing={GLOBAL_SPACING}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item md={8} xs={12}>
              {homePageContent.research.map((data) => (
                <ResearchCard
                  title={data.title}
                  text={data.text}
                  image={data.image}
                  subtitle={data.subtitle}
                />
              ))}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant='subtitle2'>#Tweets</Typography>
              <div classsName={classes.tweetHolder}>
                {homePageContent.research.map((data) => (
                  <FeedCard
                    title={data.title}
                    text={data.text}
                    image={data.image}
                    subtitle={data.subtitle}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.contactSection}>
        <Container>
          <Grid
            container
            spacing={GLOBAL_SPACING}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item md={4} xs={12}>
              <ContactForm />
            </Grid>
            <Grid item md={8} xs={12}>
              <div className={classes.maprouter}>
                <img
                  alt='Not found'
                  height='400px'
                  width='100%'
                  src={homePageContent.contact.mapUrl}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default withStyles(HomePageStyles)(HomePage);
