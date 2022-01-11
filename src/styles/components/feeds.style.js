import { createStyles } from '@mui/styles';

export default ({ spacing }) =>
  createStyles({
    card: {
      border: '1px solid #c1c1c1',
      boxShadow: 'none',
      display: 'flex',
      maxHeight: '10rem',
      marginTop: '1rem',
    },
    image: {
      width: '30%',
    },
  });
