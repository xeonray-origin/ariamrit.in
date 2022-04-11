import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    footer: {
      backgroundColor: '#212121',
      color: '#f1f1f2',
      minHeight: '5rem',
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
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
    footerTitle: {
      fontSize: '1rem!important',
    },
  });
