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
import { ResearchCardStyles } from 'styles';

const ResearchCards = (props) => {
  const { classes, title, subtitle, text, image } = props;
  return (
    <Card className={classes.card} elevation={3}>
      <CardMedia
        component='img'
        className={classes.image}
        image={image}
        alt='Live from space album cover'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {title}
          </Typography>
          <Typography component='div' variant='h5'>
            {subtitle}
          </Typography>
          <Typography component='p' variant='body1'>
            {text}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default withStyles(ResearchCardStyles)(ResearchCards);
