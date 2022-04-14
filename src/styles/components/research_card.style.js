import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    card: {
      display: 'flex!important',
      marginTop: '1rem',
      borderRadius: '.5rem!important',
      marginBottom: '1rem',
      maxHeight: 'auto',
      [theme.breakpoints.down('ipad')]: {
        marginTop: '2rem!important',
        maxHeight: 'auto!important',
        paddingRight: '1rem!important',
      },
    },
    image: {
      display: 'block',
      width: '20rem!important',
      borderRadius: '.5rem 0 0 .5rem !important',
      [theme.breakpoints.down('ipad')]: {
        width: '10rem!important',
      },
    },
    title: {
      fontSize: '1.8rem!important',
      fontFamily: 'Roboto',
      fontWeight: '350',
      [theme.breakpoints.down('ipad')]: {
        fontSize: '1.3rem!important',
      },
    },
    subtitle: {
      fontSize: '1.2rem',
      fontWeight: '200',
      paddingBottom: '1rem',
      [theme.breakpoints.down('ipad')]: {
        fontSize: '.8rem!important',
      },
    },
    body: {
      fontSize: '1.5rem',
      textAlign: 'left',
      paddingBottom: '1.3rem',
      align: 'justify',
      [theme.breakpoints.down('ipad')]: {
        fontSize: '1rem!important',
        wordSpacing: '1px!important',
      },
    },
    exploreBtn: {
      float: 'right',
      backgroundColor: '#212121!important',
      top: 1,
      bottom: 0,
      margin: '0!important',
    },
  });
