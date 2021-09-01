import { createStyles } from '@material-ui/core';

const HeroSectionStyles = (theme) =>
  createStyles({
    bgVideo: {
      height: '100%',
      width: '100%',
      float: 'left',
      top: 0,
      padding: 'none',
      position: 'absolute',
      objectFit: 'cover',
    },
    heroRoot: {
      position: 'relative',
      height: '80vh',
      width: '100%',
    },
  });

export default HeroSectionStyles;
