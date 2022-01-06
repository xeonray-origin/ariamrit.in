import { createStyles } from '@material-ui/styles';

export default (theme) =>
  createStyles({
    footer: {
      backgroundColor: '#212121',
      height: '5rem',
      position: 'relative',
      bottom: 0,
      top: 1,
      color: '#f1f1f1!important',
      zIndex: 1000,
    },
  });
