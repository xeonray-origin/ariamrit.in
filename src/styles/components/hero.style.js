import { createStyles } from '@mui/styles';

export default (theme) =>
  createStyles({
    heroImage: {
      height: '100%',
      width: '100%',
    },
    downloadBtn: {
      marginTop: theme.spacing(3),
      backgroundColor: '#3f8aaa',
      border: 'none',
      color: '#f1f1f2',
    },
  });
