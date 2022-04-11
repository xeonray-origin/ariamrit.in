import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    heroImage: {
      height: '100%',
      width: '100%',
      [theme.breakpoints.down('ipad')]: {
        height: '70%',
        width: '70%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    appName: {
      fontSize: '3rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
      [theme.breakpoints.down('ipad')]: {
        textAlign: 'center',
        fontSize: '2rem!important',
        marginTop: '5rem!important',
      },
    },
    slogan: {
      fontSize: '1.5rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
      paddingBottom: '1rem',
      [theme.breakpoints.down('ipad')]: {
        textAlign: 'center',
        fontSize: '1rem!important',
        paddingTop: '1rem',
      },
    },
    subtextUnderSlogan: {
      paddingBottom: '3rem',
      textAlign: 'justify',
      [theme.breakpoints.down('ipad')]: {
        textAlign: 'center',
        fontSize: '1.2rem!important',
      },
    },
    downloadBtn: {
      marginTop: '1.8rem',
      padding: '.8rem!important',
      '&:hover': {
        backgroundColor: '#1D749A!important',
        color: '#f1f1f2',
      },
      [theme.breakpoints.down('ipad')]: {
        display: 'block!important',
        marginRight: 'auto!important',
        marginLeft: 'auto!important',
      },
    },
  });
