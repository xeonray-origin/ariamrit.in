import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    aboutImage: {
      height: '100%',
      width: '100%',
      [theme.breakpoints.down('ipad')]: {
        height: '50%',
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5rem',
      },
    },
    sectionTitleText: {
      fontSize: '3rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
      [theme.breakpoints.down('ipad')]: {
        textAlign: 'center',
        paddingBottom: '1rem',
        fontSize: '2rem!important',
      },
    },
    sextionTitle: {},
    about: {
      fontFamily: 'Roboto!important',
      marginTop: '.1rem',
      textAlign: 'justify',
      marginBottom: '3rem',
      [theme.breakpoints.down('ipad')]: {
        textAlign: 'center!important',
        paddingBottom: '1rem',
      },
    },
    learnMoreBtn: {
      padding: '.8rem!important',
      '&:hover': {
        backgroundColor: '#1D749A!important',
        color: '#f1f1f2',
      },
      [theme.breakpoints.down('ipad')]: {
        display: 'block!important',
        marginLeft: 'auto!important',
        marginRight: 'auto!important',
      },
    },
  });
