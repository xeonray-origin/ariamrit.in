import { Grid, Typography, Container, Button } from '@mui/material';
import { HeroStyles } from 'styles';
import { appConfig, homePageContent } from 'config';
import { withStyles } from '@mui/styles';

const content = {
  heroImage: `${process.env.PUBLIC_URL}/resources/products/cesspool/4.png`,
};

const HeroSection = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={5} alignItems='center'>
      <Grid item md={6}>
        <Typography className={classes.appName} variant='h3'>
          {appConfig.name}
        </Typography>
        <Typography className={classes.slogan} variant='subtitle1'>
          {appConfig.slogan}
        </Typography>
        <Typography className={classes.subtextUnderSlogan} variant='body1' wrap>
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
  );
};

export default withStyles(HeroStyles)(HeroSection);
