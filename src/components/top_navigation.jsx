import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  MenuItem,
} from '@mui/material';
import { TopBarStyles } from 'styles';
import { appConfig } from 'config';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const content = {
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
};

const TopBar = (props) => {
  const { classes } = props;
  const DesktopMenu = () => {
    return (
      <Grid container spacing={3} direction='row-reverse'>
        {appConfig.menuItems.map((item, idx) => (
          <Grid item key={idx}>
            <Link
              style={{ textDecoration: 'none', color: '#212121' }}
              to={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
            >
              <MenuItem className={classes.menuItem}>
                <Typography variant='h6'>{item}</Typography>
              </MenuItem>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <AppBar position='relative' className={classes.appBar}>
      <Toolbar sx={{ backgroundColor: '#ffffff' }} variant='dense'>
        <IconButton
          size='medium'
          edge='start'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <img className={classes.logo} src={content.logo} alt='' />
        </IconButton>
        <DesktopMenu />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(TopBarStyles)(TopBar);
