import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    appBar: {
      height: '60px',
      border: 'none',
      position: 'relative',
      boxShadow: 'none',
      '&$.MuiAppBar-root': {
        backgroundColor: '#ffffff!important',
      },
    },
    toolbar: {
      height: '100%',
      backgroundColor: 'none',
      color: '#212121',
    },
    logo: {
      height: '3rem',
    },
    menuItem: {
      color: '#212121',
      textDecoration: 'none',
    },
  });
