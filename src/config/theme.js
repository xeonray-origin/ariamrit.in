import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  type: 'light',
  palette: {
    text: {
      primary: '#212121',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: '#515151',
    },
    background: {
      paper: '#FFFFFF',
      default: '#FAFAFA',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      ipad: 768,
    },
  },
  typography: {
    h1: {
      fontFamily: 'SegoiUI',
      fontWeight: 'bold',
      fontSize: '7rem',
    },
    h4: {
      fontFamily: 'SegoiUI',
      fontWeight: 'bold',
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: 'SegoeUI',
      fontWeight: 'bold',
      fontSize: '5rem',
    },
    h6: {
      fontFamily: 'SegoiUI',
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    subtitle2: {
      fontFamily: 'Roboto',
      // fontWeight: ,
      fontSize: '1.4rem',
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 'regular',
      fontSize: '1.2rem',
    },
    body2: {
      fontFamily: 'SegoeUI',
      fontWeight: 'regular',
      fontSize: '1.2rem',
    },
  },
});

export default theme;
