import { createStyles } from '@material-ui/core';

const HeroSectionStyles = (theme) =>
  createStyles({
    heroTitle: {
      textAlign: 'right',
      fontSize: '5rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        textAlign: 'center',
        marginTop: theme.spacing(5),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '4rem',
      },
    },
    heroSubtitle: {
      fontSize: '2rem',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
        textAlign: 'center',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '2rem',
      },
    },
    titleHolder: {
      width: '100%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 0,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      // backgroundColor: 'blue',
    },
    btnContainer: {
      width: 'fit-content',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 0,
      [theme.breakpoints.down('sm')]: {
        width: '12em',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '8rem',
      },
      // backgroundColor: 'red',
    },
    actionBtn: {
      margin: theme.spacing(1),
      '&:nth-child(2)': {
        marginRight: 0,
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    heroImage: {
      width: '34.8rem',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        position: 'absolute',
        top: 1.7,
        bottom: 1,
        zIndex: -1000,
      },
    },
  });

export default HeroSectionStyles;
