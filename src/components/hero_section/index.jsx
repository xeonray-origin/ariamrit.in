import { Grid, Typography, withStyles, Button } from '@material-ui/core';
import { ReactComponent as EnvSVG } from './../../static/environment.svg';
import { default as HeroSectionStyles } from './style';
import { appConfig } from './../../config';

const HeroSection = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={0} alignItems='center'>
      <Grid item xs={12} md={6}>
        <div className={classes.titleHolder}>
          <Typography className={classes.heroTitle} variant='h3'>
            {appConfig.name}
          </Typography>
          <Typography className={classes.heroSubtitle} variant='h6'>
            {appConfig.slogan}
          </Typography>
          <div className={classes.btnContainer}>
            <Button
              className={classes.actionBtn}
              variant='contained'
              color='primary'
            >
              Download Brochure
            </Button>
            <Button
              className={classes.actionBtn}
              variant='contained'
              color='secondary'
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <EnvSVG className={classes.heroImage} />
      </Grid>
    </Grid>
  );
};

export default withStyles(HeroSectionStyles)(HeroSection);
