import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    footer: {
      backgroundColor: '#1e1d1d',
      color: '#f1f1f2',
      minHeight: '14rem',
      padding: '2rem',
    },
    social: {
      color: '#f1f1f2',
      display: 'block',
      position: 'relateive',
      top: '50%',
    },
    footerSmallText: {
      fontSize: '.8rem!important',
    },
    iconContainer: {
      textAlign: 'right',
    },
    copy: {
      color: '#fefefe',
      textAlign: 'center',
      align: 'center',
      fontSize: '1rem!important',
    },
    footerSIcon: {
      color: '#f1f1f2!important',
    },
    footerTitle: {
      fontSize: '1rem!important',
    },
    footerDark: {
      height: '3rem',
      width: '100%',
      backgroundColor: '#181818',
    },
    icon: {
      fontSize: '1rem',
      height: '1rem',
    },
    company: {
      [theme.breakpoints.down('ipad')]: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  });
