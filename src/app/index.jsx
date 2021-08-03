import { routes } from './../routes';
import {
  AppBar,
  ThemeProvider,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Icon,
} from '@material-ui/core';
import { theme } from './../config';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant='h6'>News</Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <div className='App'>{routes}</div>;
    </ThemeProvider>
  );
};

export default App;
