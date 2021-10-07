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
  const { image, title, subtitle, descriptiion } = props;
  return (
    <Card>
      <CardMedia
        component='img'
        height={300}
        width={200}
        image={process.env.PUBLIC_URL + image}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {subtitle}
          {descriptiion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>know more</Button>
        <Button size='small'>download spec</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(ProductsCardStyles)(ProductsCards);
