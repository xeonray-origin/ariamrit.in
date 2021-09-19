import { createStyles } from '@material-ui/styles';

export default (theme) =>
  createStyles({
    appBar: {
      height: '60px',
      backgroundColor: 'transparent',
      border: 'none',
      position: 'relative',
      boxShadow: 'none',
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
