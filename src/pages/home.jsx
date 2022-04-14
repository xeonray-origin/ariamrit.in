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
            justifyItems={'center'}
            align='center'
            spacing={2}
            alignItems='center'
          >
            {homePageContent.productSection.cards.map((product, key) => (
              <Grid item xs={12} lg={4} md={12} sm={12}>
                <ProductsCards
                  id={product.id}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  image={product.image}
                  key={key}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className={classes.accreditSection}>
        <Container className={classes.accreditsContainer}>
          <Grid container spacing={7} textAlign={'center'} alignItems='center'>
            {homePageContent.accredits.map((item, key) => (
              <Grid item md={4} xs={12}>
                <AccreditDisplay
                  isIcon={item.isIcon}
                  image={item.image}
                  text={item.text}
                  stat={item.stat}
                  key={key}
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
              {homePageContent.research.map((data, key) => (
                <ResearchCard
                  title={data.title}
                  text={data.text}
                  image={data.image}
                  subtitle={data.subtitle}
                  key={key}
                />
              ))}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography variant='subtitle2'>#Tweets</Typography>
              <div classsName={classes.tweetHolder}>
                {homePageContent.research.map((data, key) => (
                  <FeedCard
                    title={data.title}
                    text={data.text}
                    image={data.image}
                    subtitle={data.subtitle}
                    key={key}
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
