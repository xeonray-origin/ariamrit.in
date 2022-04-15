import { createStyles } from '@mui/styles';

export default ({ spacing }) =>
  createStyles({
    card: {
      backgroundColor: '#ffffff',
      minHeight: '300px',
      width: '100%',
      display: 'inline-block',
      borderRadius: 0,
      padding: spacing(1),
    },
    image: {
      // width: '30%',
    },
    input: {
      width: '100%',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    multiInput: {
      width: '100%',
      marginTop: '3rem',
      marginBottom: '1rem',
    },
    formContainer: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-60%)',
      padding: '0 2rem 0 2rem ',
    },
    formLabel: {
      fontFamily: 'Special!important',
      fontSize: '3rem!important',
      fontWeight: 650,
      padding: '0 1rem 0 1rem',
    },
  });
