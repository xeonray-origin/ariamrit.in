import {
  AppBar,
  Toolbar,
  withStyles,
  IconButton,
  Grid,
  Typography,
  MenuItem,
} from '@material-ui/core';
import { TopBarStyles } from 'styles';
import { appConfig } from 'config';
import { Link, withRouter } from 'react-router-dom';

const content = {
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
};

const DesktopMenu = (props) => {
  const { classes, history } = props;
  return (
    <Grid container spacing={3} direction='row-reverse'>
      {appConfig.menuItems.reverse().map((item, idx) => (
        <Grid item>
          <Link
            style={{ textDecoration: 'none', color: '#212121' }}
            to={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
          >
            <MenuItem classes={classes.menuItem}>
              <Typography variant='h6'>{item}</Typography>
            </MenuItem>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

const TopBar = (props) => {
  const { classes } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar variant='dense'>
        <IconButton
          size='medium'
          edge='start'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <img className={classes.logo} src={content.logo} alt='' />
        </IconButton>
        <DesktopMenu classes={classes} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(TopBarStyles)(TopBar);
