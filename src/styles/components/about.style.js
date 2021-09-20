import { createStyles } from '@material-ui/styles';

export default (theme) =>
  createStyles({
    aboutImage: {
      height: '100%',
      width: '100%',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      fontFamily: 'SegoeUI',
    },
    about: {
      fontFamily: 'Roboto',
    },
    learnMoreBtn: {
      marginTop: '1.5rem',
    },
  });
