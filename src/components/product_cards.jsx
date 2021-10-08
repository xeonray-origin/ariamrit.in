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
} from '@material-ui/core';
import { ProductsCardStyles } from 'styles';

const ProductsCards = (props) => {
  const { image, title, subtitle, description, classes } = props;
  return (
    <Card elevation={3}>
      <CardMedia
        component='img'
        height={300}
        width={200}
        image={process.env.PUBLIC_URL + image}
        alt='green iguana'
      />
      <CardContent>
        <Typography variant='h4' component='div'>
          {title.toUpperCase()}
        </Typography>
        <Typography gutterBottom variant='subtitle2' color='text.secondary'>
          {subtitle.toUpperCase()}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' size='small'>
          know more
        </Button>
        <Button variant='outlined' size='small'>
          download spec
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(ProductsCardStyles)(ProductsCards);
