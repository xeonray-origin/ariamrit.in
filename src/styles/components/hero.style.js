import { createStyles } from '@material-ui/styles';

export default (theme) =>
  createStyles({
    heroImage: {
      height: '100%',
      width: '100%',
    },
    name: {
      fontSize: '5rem',
      fontWeight: 'bold',
      fontFamily: 'SegoeUI',
    },
    slogan: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: 'SegoeUI',
    },
    subtextUnderSlogan: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    downloadBtn: {
      marginTop: theme.spacing(3),
      backgroundColor: '#3f8aaa',
      border: 'none',
      color: '#f1f1f2',
      fontFamily: 'Roboto',
    },
  });
