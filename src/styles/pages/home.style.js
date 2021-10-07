import { createStyles } from '@material-ui/styles';

export default (theme) =>
  createStyles({
    heroSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(15),
      width: '100%',
    },
    aboutSection: {
      position: 'relative',
      height: 'auto',
      marginTop: theme.spacing(15),
      width: '100%',
      backgroundColor: '#FAFAFA',
      padding: '5rem 0rem 5rem 0rem',
    },
    productsSection: {
      position: 'relative',
      height: 'auto',
      width: '100%',
      padding: '5rem 0rem 5rem 0rem',
    },
  });
