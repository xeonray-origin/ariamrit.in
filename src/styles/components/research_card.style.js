import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2),
      display: 'flex',
      marginTop: '1rem',
      marginBottom: '1rem',
      maxHeight: '12rem',
      [theme.breakpoints.down('ipad')]: {
        marginTop: '2rem!important',
        maxHeight: 'auto!important',
      },
    },
    image: {
      height: '10rem',
      width: '20%',
    },
  });
