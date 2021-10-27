import { createStyles } from '@material-ui/styles';

export default ({ spacing }) =>
  createStyles({
    card: {
      backgroundColor: '#ffffff',
      width: 'auto',
      height: '100%',
      padding: '1rem',
    },
    image: {
      width: '30%',
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
