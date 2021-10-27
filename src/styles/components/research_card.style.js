import { createStyles } from '@material-ui/styles';

export default ({ spacing }) =>
  createStyles({
    card: {
      padding: spacing(2),
      display: 'flex',
      marginTop: '1rem',
      marginBottom: '1rem',
      maxHeight: '12rem',
    },
    image: {
      height: '10rem',
      width: '20%',
    },
  });
