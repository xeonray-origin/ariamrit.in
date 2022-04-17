import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    card: {
      width: '100%',
      height: '40rem!important',
      borderRadius: '.5rem',
      [theme.breakpoints.down('ipad')]: {
        heightt: '900px!important',
      },
    },
    map: {
      border: '.5rem 0 0 .5rem',
      position: 'relative',
      width: '100%',
      heightt: 'auto',
      [theme.breakpoints.down('ipad')]: {
        marginTop: '5rem',
      },
    },
  });
