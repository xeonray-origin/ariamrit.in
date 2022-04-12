import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    appBar: {
      backgroundColor: 'transparent!important',
      border: 'none!important',
      boxShadow: 'none!important',
    },
    appBarSm: {
      height: '.8rem',
    },
    toolbar: {
      height: '100%',
      backgroundColor: '#FAFAFA!important',
      color: '#212121',
    },
    logo: {
      height: '3rem',
    },
    logoSm: {
      height: '1.8rem',
    },
    icon: {
      textDecoration: 'none',
      background: 'transparent',
      color: '#212121!important',
      fontFamily: 'Roboto',
      '&:hover': {
        background: 'transparent',
        cursor: 'pointer',
        border: 'none',
      },
    },
    menuItem: {
      color: '#212121',
      textDecoration: 'none',
      fontFamily: 'Roboto',
      fontSize: '.8rem',
      '&:hover': {
        fontWeight: 'bolder',
      },
    },
  });
