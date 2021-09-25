import { createStyles } from '@material-ui/styles';

export default ({ breakpoints, spacing, palette }) =>
  createStyles({
    aboutImage: {
      height: '100%',
      width: '100%',
    },
    about: {
      fontFamily: 'Roboto',
    },
    learnMoreBtn: {
      marginTop: '1.5rem',
    },
    root: {
      // a must if you want to set arrows, indicator as absolute
      position: 'relative',
      width: '100%',
    },
    slide: {
      perspective: 1000, // create perspective
      overflow: 'hidden',
      // relative is a must if you want to create overlapping layers in children
      position: 'relative',
      paddingTop: spacing(8),
      [breakpoints.up('sm')]: {
        paddingTop: spacing(10),
      },
      [breakpoints.up('md')]: {
        paddingTop: spacing(14),
      },
    },
    imageContainer: {
      display: 'block',
      position: 'relative',
      zIndex: 2,
      paddingBottom: '54.25%',
    },
    image: {
      display: 'block',
      position: 'absolute',
      zIndex: 10,
      width: '90%',
      height: '90$',
      objectFit: 'cover',
      marginLeft: '12%',
      [breakpoints.up('sm')]: {
        marginLeft: '4%',
      },
    },
    arrow: {
      display: 'none',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [breakpoints.up('sm')]: {
        display: 'inline-flex',
      },
    },
    arrowLeft: {
      left: 0,
      [breakpoints.up('lg')]: {
        left: -64,
      },
    },
    arrowRight: {
      right: 0,
      [breakpoints.up('lg')]: {
        right: -64,
      },
    },
    text: {
      // shared style for text-top and text-bottom
      fontFamily: 'SegoeUI',
      fontWeight: 900,
      position: 'absolute',
      color: palette.common.white,
      padding: '0 8px',
      transform: 'rotateY(45deg)',
      lineHeight: 1.2,
      [breakpoints.up('sm')]: {
        padding: '0 16px',
      },
      [breakpoints.up('md')]: {
        padding: '0 24px',
      },
    },
    title: {
      top: 20,
      left: '20%',
      height: '40%',
      fontSize: '42rem',
      zIndex: 1,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
      [breakpoints.up('sm')]: {
        top: 40,
        fontSize: 72,
      },
      [breakpoints.up('md')]: {
        top: 52,
        fontSize: 72,
      },
    },
    subtitle: {
      top: 80,
      left: '0%',
      height: '32%',
      fontSize: '32rem',
      zIndex: 2,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
      [breakpoints.up('sm')]: {
        top: 112,
        left: '6%',
        fontSize: 96,
      },
      [breakpoints.up('md')]: {
        top: 128,
        fontSize: 104,
      },
    },
    indicatorContainer: {
      textAlign: 'center',
    },
  });
