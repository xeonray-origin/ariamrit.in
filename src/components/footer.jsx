import {
  withStyles,
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
} from '@material-ui/core';
import { FooterStyles } from 'styles';

const FooterDiv = (props) => {
  const { classes, title, subtitle, text, image } = props;
  return <div className={classes.footer}>asdas</div>;
};

export default withStyles(FooterStyles)(FooterDiv);
