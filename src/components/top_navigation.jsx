import { Toolbar, IconButton, Grid, Typography, MenuItem } from '@mui/material';
import { TopBarStyles, AppBar } from 'styles';
import { appConfig } from 'config';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const content = {
  logo: `${process.env.PUBLIC_URL}/resources/logo.png`,
  logoW: `${process.env.PUBLIC_URL}/resources/icons/logo_white.png`,
};

const TopBar = (props) => {
  const { classes, handleDrawerOpen, open } = props;
  const [isSticky, setIsSticky] = useState();
  const [isMobile, setIsMobile] = useState();

  const calculateScrollPosition = () => {
    let windowHeight = window.scrollY;
    if (windowHeight >= 120) return setIsSticky(true);
    setIsSticky(false);
  };

  const calculateCientWIdth = () => {
    let windowWidth = document.body.clientWidth;
    if (windowWidth <= 768) return setIsMobile(true);
    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPosition);
    calculateCientWIdth();
    window.addEventListener('resize', calculateCientWIdth);
  }, []);

  const DesktopMenu = () => {
    return (
      <Grid container spacing={1} direction='row-reverse'>
        {appConfig.menuItems.map((item, idx) => (
          <Grid item key={idx}>
            <Link
              style={{ textDecoration: 'none', color: '#212121' }}
              to={`${item === 'Home' ? '/' : '/' + item.toLowerCase()}`}
            >
              <MenuItem className={classes.menuItem}>
                <Typography
                  sx={{
                    color: isSticky ? '#f1f1f2' : '#212121',
                    fontSize: isSticky ? '1rem' : '1.2rem',
                  }}
                  variant='subtitle'
                >
                  {item}
                </Typography>
              </MenuItem>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };

  const MobileMenu = () => {
    return (
      <Grid container spacing={1} direction='row-reverse'>
        <Grid item>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={handleDrawerOpen}
            aria-label='open drawer'
            sx={{ textAlign: 'right', color: isSticky ? '#f1f1f2' : '#212121' }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  return (
    <AppBar
      open={open}
      position={isSticky ? 'fixed' : 'relative'}
      className={isSticky ? classes.appBarSm : classes.appBar}
    >
      <Toolbar
        sx={{
          backgroundColor: isSticky ? '#212121' : '#ffffff',
          transition: 'all 0.5s linear',
        }}
        variant='dense'
      >
        <IconButton
          className={classes.icon}
          disabled
          size={isSticky ? 'small' : 'medium'}
          edge='start'
          aria-label='open drawer'
        >
          <img
            className={isSticky ? classes.logoSm : classes.logo}
            src={isSticky ? content.logoW : content.logo}
            alt=''
          />
          <Typography
            sx={{
              color: isSticky ? '#f1f1f2' : '#212121',
              paddingLeft: '1rem',
            }}
            variant='subtitle'
          >
            AAEL
          </Typography>
        </IconButton>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(TopBarStyles)(TopBar);
