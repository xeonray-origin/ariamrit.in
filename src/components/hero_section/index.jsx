import { Grid, Typography, withStyles, Button } from '@material-ui/core';
import { default as HeroSectionStyles } from './style';
import { appConfig } from './../../config';

const HeroSection = (props) => {
  const { classes } = props;

  return (
    <div className={classes.heroRoot}>
      <video
        autoPlay
        loop
        muted
        className={classes.bgVideo}
        src='/static/videos/hero-title.mp4'
      />
    </div>
  );
};

export default withStyles(HeroSectionStyles)(HeroSection);
