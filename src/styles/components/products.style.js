import { createStyles } from '@mui/styles';

export default ({ spacing }) =>
  createStyles({
    cardTitle: {
      fontSize: '1.2rem!important',
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
    },
    cardSubtitle: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '1rem!important',
      paddingBottom: '1rem',
    },
    cardContext: {
      fontFamily: 'Roboto',
      fontSize: '1rem!important',
      textAlign: 'left',
      height: '5rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textJustify: 'inter-word',
    },
    cardMedia: {
      padding: spacing(2),
    },
    card: {
      width: '100%',
      maxHeight: '40rem',
      padding: '1rem',
    },
  });
