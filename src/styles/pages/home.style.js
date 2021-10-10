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
  });
