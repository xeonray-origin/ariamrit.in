import {
  Grid,
  Typography,
  withStyles,
  Container,
  Button,
} from '@material-ui/core';
import { HeroStyles } from 'styles';
import { appConfig, homePageContent } from 'config';

const content = {
  heroImage: `${process.env.PUBLIC_URL}/resources/products/cesspool/4.png`,
};

const HeroSection = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item md={6}>
          <Typography variant='h3'>{appConfig.name}</Typography>
          <Typography variant='subtitle1'>{appConfig.slogan}</Typography>
          <Typography
            className={classes.subtextUnderSlogan}
            variant='body1'
            wrap
          >
            {homePageContent.heroSection.subtextUnderSlogan}
          </Typography>
          <Button className={classes.downloadBtn} variant='outlined'>
            {homePageContent.heroSection.downloadBrochureBtn}
          </Button>
        </Grid>
        <Grid item md={6}>
          <img className={classes.heroImage} src={content.heroImage} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(HeroStyles)(HeroSection);
