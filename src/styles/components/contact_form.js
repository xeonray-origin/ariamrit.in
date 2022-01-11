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
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  });
