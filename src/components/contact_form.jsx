import {
  Container,
  Icon,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Input,
  FormControl,
  TextField,
} from '@mui/material';
import { withStyles } from '@mui/styles';

import { ContactFormStyles } from 'styles';

const ContactForm = (props) => {
  const { classes, title, subtitle, text, image } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  };

  return (
    <>
      <Typography className={classes.formLabel}>
        We would love to hear from you !
      </Typography>
      <Grid
        className={classes.formContainer}
        container
        direction={'row'}
        alignItems={'center'}
      >
        <form onSubmit={onSubmit}>
          <Grid item>
            <Input
              className={classes.input}
              name='name'
              size='small'
              placeholder='Name'
            />
            <Input
              className={classes.input}
              size='small'
              name='phone'
              placeholder='Phone Number'
            />
            <Input className={classes.input} name='phone' placeholder='Email' />
            <TextField
              className={classes.multiInput}
              placeholder='Requirements'
              size='small'
              multiline
              rows={4}
            />
            <Button
              sx={{ marginTop: '2rem' }}
              variant='contained'
              color='primary'
              type='submit'
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default withStyles(ContactFormStyles)(ContactForm);
