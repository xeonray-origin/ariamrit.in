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
      padding: spacing(1),
      height: '20rem',
    },
    image: {
      height: '180px!important',
    },
    card: {
      width: '100%',
      height: 'auto',
      padding: '1rem',
      borderRadius: '.5rem!important',
    },
  });
