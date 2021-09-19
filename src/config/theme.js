import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  type: 'light',
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
});

export default theme;
