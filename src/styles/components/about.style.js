import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    aboutImage: {
      height: '100%',
      width: '100%',
    },
    sectionTitleText: {
      fontSize: '3rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
    },
    sextionTitle: {},
    about: {
      fontFamily: 'Roboto',
      marginTop: '.1rem',
      marginBottom: '3rem',
    },
    learnMoreBtn: {
      marginTop: '1.5rem',
      padding: '.8rem!important',
      '&:hover': {
        backgroundColor: '#1D749A!important',
        color: '#f1f1f2',
      },
    },
  });
