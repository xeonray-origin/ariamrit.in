import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    heroImage: {
      height: '100%',
      width: '100%',
    },
    appName: {
      fontSize: '3rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
    },
    slogan: {
      fontSize: '1.5rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
      paddingBottom: '1rem',
    },
    subtextUnderSlogan: {
      paddingBottom: '3rem',
      textAlign: 'justify',
    },
    downloadBtn: {
      marginTop: '1.8rem',
      padding: '.8rem!important',
      '&:hover': {
        backgroundColor: '#1D749A!important',
        color: '#f1f1f2',
      },
    },
  });
