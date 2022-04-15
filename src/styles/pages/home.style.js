import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    heroSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(13),
      marginBottom: theme.spacing(13),
      width: '100%',
      [theme.breakpoints.down('ipad')]: {
        marginTop: '2rem!important',
      },
    },
    aboutSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(3),
      width: '100%',
      backgroundColor: '#FAFAFA',
      padding: '3rem 0rem 3rem 0rem',
      marginBottom: theme.spacing(13),
      [theme.breakpoints.down('ipad')]: {
        marginBottom: '5rem!important',
      },
    },
    productsSection: {
      position: 'relative',
      marginTop: theme.spacing(3),
      height: 'auto',
      width: '100%',
      marginBottom: theme.spacing(13),
      [theme.breakpoints.down('ipad')]: {
        marginTop: '1rem!important',
      },
    },
    accreditSection: {
      position: 'relative',
      height: 'auto',
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(15),
      width: '100%',
      backgroundColor: '#f5f5f5',
      padding: '3rem 0rem 3rem 0rem',
    },
    accreditsContainer: {},
    researchSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      width: '100%',
      backgroundColor: '#FAFAFA',
    },
    tweetHolder: {
      height: '100%',
      width: '100%',
      padding: '.5rem',
      border: '1px solid #c1c1c1',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      overflowY: 'scroll',
    },
    contactSection: {
      // paddingTop: '10rem',
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      // backgroundColor: '#07AC5D',
      height: 'auto',
    },
    researchShort: {
      fontSize: '4rem',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: '450',
      fontFamily: 'Special',
      [theme.breakpoints.down('ipad')]: {
        fontSize: '2.5rem!important',
        wordSpacing: '1px!important',
      },
    },
    maprouter: {
      width: '100px',
      height: '100px',
    },
    gmap_canvas: {
      overflow: 'hidden',
      background: 'none!important',
      width: 'auto',
      height: '100%',
    },
    gmap_iframe: {
      height: '65vh!important',
      width: '50%!important',
      display: 'inline-block',
    },
  });
