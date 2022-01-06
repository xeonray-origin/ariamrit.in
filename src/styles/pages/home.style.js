import { createStyles } from '@material-ui/styles';

export default (theme) =>
  createStyles({
    heroSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(13),
      width: '100%',
    },
    aboutSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(3),
      width: '100%',
      backgroundColor: '#FAFAFA',
      padding: '3rem 0rem 3rem 0rem',
    },
    productsSection: {
      position: 'relative',
      height: 'auto',
      width: '100%',
      padding: '1rem 0rem 1rem 0rem',
    },
    accreditSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(7),
      width: '100%',
      backgroundColor: '#F2F2F2',
      padding: '5rem 0rem 5rem 0rem',
    },
    researchSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(7),
      width: '100%',
      backgroundColor: '#FAFAFA',
      padding: '5rem 0rem 5rem 0rem',
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
      paddingBottom: theme.spacing(10),
      // backgroundColor: '#07AC5D',
    },

    mapouter: {
      position: 'relative',
      textAlign: 'right',
      width: '100%',
      height: '100%',
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
