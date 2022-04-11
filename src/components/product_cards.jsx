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
} from '@mui/material';
import { ProductsCardStyles } from 'styles';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const ProductsCards = (props) => {
  const { id, image, title, subtitle, description, classes } = props;

  const onKnowMore = () => {
    props.history.push('/product/' + id);
  };

  return (
    <Card className={classes.card} elevation={3}>
      <CardMedia
        className={classes.cardMedia}
        component='img'
        height={300}
        width={200}
        image={process.env.PUBLIC_URL + image}
        alt='green iguana'
      />
      <CardContent>
        <Typography variant='h4'>{title.toUpperCase()}</Typography>
        <Typography variant='title' color='text.secondary'>
          {subtitle.toUpperCase()}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onKnowMore} variant='outlined' size='small'>
          know more
        </Button>
        <Button variant='outlined' size='small'>
          download spec
        </Button>
      </CardActions>
    </Card>
  );
};

ProductsCards.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(ProductsCardStyles)(ProductsCards));
