import { Grid, Typography, withStyles } from '@material-ui/core';
import { HeroStyles } from 'styles';
import { appConfig, homePageContent } from 'config';

const content = {
  heroImage: `${process.env.PUBLIC_URL}/resources/products/cesspool/4.png`,
};

const HeroSection = (props) => {
  const { classes } = props;
  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item md={6}>
        <Typography
          style={{ fontSize: '5rem', fontWeight: 'bold' }}
          variant='h3'
        >
          {appConfig.name}
        </Typography>
        <Typography
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          variant='subtitle1'
        >
          {appConfig.slogan}
        </Typography>
        <Typography variant='subtitle1' wrap>
          {homePageContent.subtextUnderSlogan}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <img className={classes.heroImage} src={content.heroImage} alt='' />
      </Grid>
    </Grid>
  );
};

export default withStyles(HeroStyles)(HeroSection);
