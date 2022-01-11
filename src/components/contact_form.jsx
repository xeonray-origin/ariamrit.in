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
    <Card className={classes.card} elevation={0}>
      <form onSubmit={onSubmit}>
        <legend>
          <Typography variant='subtitle2'>Get in Touch</Typography>
        </legend>
        <Input className={classes.input} name='name' placeholder='Name' />
        <Input
          className={classes.input}
          name='phone'
          placeholder='Phone Number'
        />
        <Input className={classes.input} name='phone' placeholder='Email' />
        <TextField
          className={classes.multiInput}
          placeholder='Requirements'
          multiline
          rows={4}
        />
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default withStyles(ContactFormStyles)(ContactForm);
